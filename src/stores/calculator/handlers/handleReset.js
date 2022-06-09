import { logArguments } from "../utils/logArguments";

function handleReset() {
  logArguments("handleReset", arguments);

  return {
    previousOperation: "",
    currentOperation: "",
    previousValue: "",
    currentValue: "",
    result: "",
    isReadingValue: false,
    fromEquals: false,
  };
}

export { handleReset };
