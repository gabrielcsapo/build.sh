import { describe, expect, test } from "vitest";

import fs from "fs";
import path from "path";
import yaml from "js-yaml";

import { execute } from "./execute";

describe("@execute", () => {
  expect.assertions(1);

  test("should be able to execute build.yml", async () => {
    expect.assertions(1);

    const buildFile = fs.readFileSync(
      path.resolve(__dirname, "fixtures", "build.yml"),
      "utf8"
    );
    const doc = yaml.load(buildFile);

    try {
      console.log(path.resolve(__dirname, "fixtures", "build"));
      await execute(
        Object.assign(doc, {
          output: path.resolve(__dirname, "fixtures", "build"),
          runOnly: [],
          debug: true,
          browser: false,
        })
      );
    } catch (ex) {
      expect(ex).toBeFalsy("should not have failed with error");
    }

    expect(
      fs.existsSync(path.resolve(__dirname, "fixtures", "build", "index.html"))
    ).toBeTruthy();
  });
});
