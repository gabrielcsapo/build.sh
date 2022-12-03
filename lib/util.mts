// @ts-ignore
import AsciiPipeline from "ascii-pipeline";

import { Pipeline } from "./pipeline.mjs";

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

/**
 * returns the milleseconds in the form of either day, hour, minute or second shorthand
 * @param ms - the time in milleseconds
 */
export function ms(ms: number): string {
  if (ms >= d) {
    return `${Math.floor(ms / d)}d`;
  }
  if (ms >= h) {
    return `${Math.floor(ms / h)}h`;
  }
  if (ms >= m) {
    return `${Math.floor(ms / m)}m`;
  }
  if (ms >= s) {
    return `${Math.floor(ms / s)}s`;
  }
  return ms + "ms";
}

export function convertToAsciiPipeline(tasks: Pipeline[]) {
  let raw = tasks.map((t) => {
    return {
      name: t.name,
      status: t.state,
      children: t.tasks.map((s) => {
        return {
          name: s instanceof Pipeline ? s.name : s.command,
          status: s.state,
        };
      }),
    };
  });
  return new AsciiPipeline(raw).toString();
}
