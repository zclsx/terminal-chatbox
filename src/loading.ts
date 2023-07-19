import ora from "ora";
import type { Ora } from "ora";

let spinner: Ora;
export function startLoading() {
  spinner = ora("thinking...\r").start();
}

export function stopLoading() {
    spinner.stop();
}
