import {
  readFile as callbackReadFile,
  rm as callbackRm,
  writeFile as callbackWriteFile,
} from "fs";
import { promisify } from "util";

export const readFile = promisify(callbackReadFile);
export const rm = promisify(callbackRm);
export const writeFile = promisify(callbackWriteFile);
