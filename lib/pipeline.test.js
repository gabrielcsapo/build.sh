import { describe, expect, test } from "vitest";

import { Pipeline } from "./pipeline";

describe("@pipeline", () => {
  expect.assertions(2);

  test("should run sequential tasks", async () => {
    expect.assertions(19);

    const events = [];
    const pipeline = new Pipeline({
      stage1: ["echo 'hello world'", "echo 'second task'"],
      stage2: ["ls -lh"],
    });

    pipeline.events.on("start", (stage) => {
      events.push(stage.name);
    });

    await pipeline.run();
    const results = pipeline.getReport();

    expect(events).toEqual(["stage1", "stage2"]);

    expect(results.children[0].name).toBe("stage1");
    expect(results.children[0].state).toBe("success");
    expect(results.children[0].children.length).toBe(2);

    expect(typeof results.children[0].children[0].output[0]).toBe("object");
    expect(results.children[0].children[0].output[0].date).toBeTruthy();
    expect(results.children[0].children[0].output[0].type).toBe("stdout");
    expect(results.children[0].children[0].output[0].content).toBe(
      "hello world\n"
    );
    expect(results.children[0].children[0].state).toBe("success");
    expect(results.children[0].children[0].time).toBeTruthy();

    expect(typeof results.children[0].children[1].output[0]).toBe("object");
    expect(results.children[0].children[1].output[0].date).toBeTruthy();
    expect(results.children[0].children[1].output[0].type).toBe("stdout");
    expect(results.children[0].children[1].output[0].content).toBe(
      "second task\n"
    );
    expect(results.children[0].children[1].state).toBe("success");
    expect(results.children[0].children[1].time).toBeTruthy();

    expect(results.children[1].name).toBe("stage2");
    expect(results.children[1].state).toBe("success");
    expect(results.children[1].children.length).toBe(1);
  });

  test("should run a subset of sequential tasks", async () => {
    expect.assertions(16);

    const events = [];
    const pipeline = new Pipeline({
      stage1: ["echo 'hello world'", "echo 'second task'"],
      stage2: ["ls -lh"],
    });

    pipeline.events.on("end", (stage) => {
      events.push(stage.name);
    });

    await pipeline.run({ ignore: ["stage2"] });
    const results = pipeline.getReport();

    expect(events).toEqual(["stage1"]);

    expect(results.children[0].name).toBe("stage1");
    expect(results.children[0].state).toBe("success");
    expect(results.children[0].children.length).toBe(2);

    expect(typeof results.children[0].children[0].output[0]).toBe("object");
    expect(results.children[0].children[0].output[0].date).toBeTruthy();
    expect(results.children[0].children[0].output[0].type).toBe("stdout");
    expect(results.children[0].children[0].output[0].content).toBe(
      "hello world\n"
    );
    expect(results.children[0].children[0].state).toBe("success");
    expect(results.children[0].children[0].time).toBeTruthy();

    expect(typeof results.children[0].children[1].output[0]).toBe("object");
    expect(results.children[0].children[1].output[0].date).toBeTruthy();
    expect(results.children[0].children[1].output[0].type).toBe("stdout");
    expect(results.children[0].children[1].output[0].content).toBe(
      "second task\n"
    );
    expect(results.children[0].children[1].state).toBe("success");
    expect(results.children[0].children[1].time).toBeTruthy();
  });
});
