import { describe, expect, test } from "vitest";

import { ms } from "./util";

describe("util", () => {
  expect.assertions(1);

  describe("ms", () => {
    expect.assertions(4);

    test("@ms seconds", () => {
      expect.assertions(1);

      expect(ms(6000)).toBe("6s");
    });

    test("@ms minutes", () => {
      expect.assertions(1);

      expect(ms(600000)).toBe("10m");
    });

    test("@ms hours", () => {
      expect.assertions(1);

      expect(ms(6000000)).toBe("1h");
    });

    test("@ms days", () => {
      expect.assertions(1);

      expect(ms(600000000)).toBe("6d");
    });
  });
});
