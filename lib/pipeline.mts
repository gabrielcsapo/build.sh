import { EventEmitter } from "events";

import { Command, CommandReport } from "./command.mjs";

export interface PipelineReport {
  id: string;
  name: string | undefined;
  state: string;
  type: string;
  children: Array<PipelineReport | CommandReport>;
}

export class Pipeline {
  tasks: Array<Command | Pipeline>;
  name: string | undefined;
  events: EventEmitter;
  parent: Pipeline | undefined;
  state: string;
  id: string;

  /**
   * Orchestrates running sub commands and nested pipelines
   * @param  tasks - array of strings or nested objects that define a pipeline
   * @param  name  - the name of the pipeline
   * @param  parent - the parent Pipeline
   * @param  events - the parent Pipeline's event emitter
   */
  constructor(
    tasks: string[] = [],
    name?: string,
    parent?: Pipeline,
    events?: EventEmitter
  ) {
    this.events = events || new EventEmitter();
    this.name = name || undefined;
    this.parent = parent || undefined;

    let tempTasks = [];
    if (typeof tasks === "object" && !Array.isArray(tasks)) {
      tempTasks = Object.keys(tasks).map((name) => {
        return new Pipeline(tasks[name], name, this, this.events);
      });
    } else {
      tempTasks = tasks.map((task) => {
        if (typeof task === "object") {
          return Object.keys(task).map((name) => {
            return new Pipeline(task[name], name, this, this.events);
          });
        } else {
          return new Command(this, task);
        }
      });
    }

    // @ts-ignore
    this.tasks = [].concat.apply([], tempTasks);
    this.state = "unknown";
    this.id = Date.now() + Math.random().toString(36).substr(2, 10);
  }

  get path(): string {
    if (this.name !== "") {
      return `${this.name}${
        this?.parent?.path ? `:${this?.parent?.path}` : ""
      }`;
    } else {
      return "";
    }
  }

  get paths(): string[] {
    var paths = [this.path];
    this.tasks.forEach((task) => {
      if (task instanceof Pipeline) {
        paths = paths.concat(task.paths);
      }
    });
    return paths.filter((p) => p);
  }

  /**
   * runs the pipeline and its children recursively
   * @param  options - an options block that contains overrides
   * @param  options.ignore - an array of fullNames of pipelines for example sub:sub2 would ignore sub2 as a child of sub
   */
  async run(
    options: {
      ignore?: string[];
    } = {}
  ) {
    this.state = "in_progress";

    const { ignore = [] } = options;

    // ignore this if it exists in the ignore array
    if (!ignore.find((i) => this.path.indexOf(i) > -1)) {
      if (this.name) {
        this.events.emit("start", this);
      }

      for (const task of this.tasks) {
        task.state = "in_progress";

        const state = await task.run({ ignore });

        // @ts-ignore
        this.state = state;

        // we want to bail out early as we have already failed
        if (state === "fail") {
          this.events.emit("end", this);

          return this.state;
        }
      }

      if (this.name) {
        this.events.emit("end", this);

        return this.state;
      }
    }

    return this.state;
  }
  /**
   * Gets information for the pipeline and its children
   */
  getReport(): PipelineReport {
    return {
      id: this.id,
      name: this.name,
      state: this.state,
      type: "pipeline",
      children: this.tasks.map((task) => {
        return task.getReport();
      }),
    };
  }
}
