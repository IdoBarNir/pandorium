import { ExecOptions } from "child_process";

export type ExecAsyncOptions = ExecOptions & {
  stdio?:
    | "pipe"
    | "ignore"
    | "inherit"
    | "ipc"
    | (number | null | undefined | "pipe" | "ipc" | "ignore" | "inherit")[];
};
