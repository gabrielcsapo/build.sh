import { spawn } from "child_process";

import { type Pipeline } from "./pipeline.mjs";

type Output = Array<{
  type: string;
  content: string;
  date: Date;
}>;

export interface CommandReport {
  type: string;
  command: string;
  output: Output;
  state: string;
  time: number;
  id: string;
}

export class Command {
  parent: Pipeline;
  command: string;
  output: Output;
  state: string;
  time: number;
  id: string;

  /**
   * Class used to define shell commands be executed in the pipeline
   */
  constructor(parent: Pipeline, command: string) {
    /**
     * The parent pipeline this command belongs too
     */
    this.parent = parent;
    /**
     * The shell command that this command will execute
     */
    this.command = command;
    /**
     * The output from the running a sub-process with the shell command
     */
    this.output = [];
    /**
     * The state of the command (unknown, skipped, fail, success)
     */
    this.state = "unknown";

    /**
     * The time in MS that the command took to execute
     */
    this.time = 0;

    /**
     * A unique identifier
     */
    this.id = Date.now() + Math.random().toString(36).substr(2, 10);
  }
  /**
   * Runs the command using the passed in shell script as the command to run
   */
  run() {
    return new Promise((resolve, reject) => {
      const start = process.hrtime();

      const child = spawn(this.command, {
        cwd: process.cwd(),
        shell: "/bin/bash",
      });

      child.stdout.on("data", (m) => {
        this.output.push({
          type: "stdout",
          content: m.toString("utf8"),
          date: new Date(),
        });
      });

      child.stderr.on("data", (m) => {
        this.output.push({
          type: "stderr",
          content: m.toString("utf8"),
          date: new Date(),
        });
      });

      child.on("exit", (code) => {
        const end = process.hrtime(start);

        this.state = code === 0 ? "success" : "fail";
        this.time = (end[0] * 1e9 + end[1]) / 1e6;
        resolve(this.state);
      });
    });
  }

  /**
   * returns information pertaining to the command
   */
  getReport(): CommandReport {
    return {
      type: "command",
      command: this.command,
      output: this.output,
      state: this.state,
      time: this.time,
      id: this.id,
    };
  }
}
