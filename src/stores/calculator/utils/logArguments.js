import { DEV } from "solid-js";

function logArguments(functionName, functionArguments) {
  if (DEV) {
    console.log(functionName, JSON.stringify([...functionArguments], null, 2));
  }
}

export { logArguments };
