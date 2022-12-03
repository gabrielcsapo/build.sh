import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 100000,
    coverage: {
      extension: [".mts", ".js", ".ts"]
    }
  },
});
