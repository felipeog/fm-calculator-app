import { DEV } from "solid-js";

export function logArguments(functionName, functionArguments) {
  if (DEV) {
    console.log(functionName, JSON.stringify([...functionArguments], null, 2));
  }
}
