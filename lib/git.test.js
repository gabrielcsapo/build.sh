import { describe, expect, test } from "vitest";

import path from "path";
import shell from "shelljs";

import { Git } from "./git";

describe("@git", () => {
  expect.assertions(4);

  test("should fail because directory is not a git directory", async () => {
    expect.assertions(2);

    try {
      const data = await Git({ directory: __dirname });
      expect(data !== undefined).toBeTruthy();
      throw new Error("should not return data");
    } catch (err) {
      expect(typeof err !== "undefined").toBeTruthy();
      expect(err.message).toBe("directory does not contain git");
    }
  });

  test("should return the correct data", async () => {
    expect.assertions(1);

    var keys = [
      "author_date",
      "author_email",
      "author_name",
      "branch",
      "commit",
      "committer_date",
      "committer_email",
      "committer_name",
      "message",
      "remotes",
    ];

    try {
      const data = await Git({ directory: path.resolve(__dirname, "..") });
      expect(Object.keys(data).sort()).toEqual(keys);
    } catch (err) {
      expect(err).toBeFalsy();
    }
  });

  test("should fail when no remote is present", async () => {
    expect.assertions(1);

    const directory = path.resolve(__dirname, "fixtures", "sample-module");

    shell.exec("git init", { cwd: directory });
    shell.exec('git config --global user.name "testing"', { cwd: directory });
    shell.exec('git config --global user.email "testing@build-sh.com"', {
      cwd: directory,
    });
    shell.exec("git add -A", { cwd: directory });
    shell.exec('git commit -m "testtest"', { cwd: directory });

    try {
      await Git({ directory });
      throw new Error("should fail, but doesn't");
    } catch (err) {
      expect(err.message).toBe("no remote found");
    }
  });

  test("should cleanup git directory", () => {
    shell.exec("rm -rf .git", {
      cwd: path.resolve(__dirname, "fixtures", "sample-module"),
    });
  });
});
