import { logArguments } from "../utils/logArguments";
import { applyOperation } from "../utils/applyOperation";

export function handleOperation(
  input,
  { currentValue, currentOperation, result, fromEquals }
) {
  logArguments("handleOperation", arguments);

  const operation = currentOperation || input;

  if (fromEquals) {
    return {
      isReadingValue: false,
      fromEquals: false,
      previousOperation: currentOperation,
      currentOperation: input,
      previousValue: currentValue,
      currentValue: "",
      result: currentValue || result,
    };
  }

  if (currentValue.length) {
    const isNegative = currentOperation === "-";
    const left = Number(result);

    return {
      isReadingValue: false,
      fromEquals: false,
      previousValue: currentValue,
      currentValue: "",
      previousOperation: currentOperation,
      currentOperation: input,
      result: result.length
        ? applyOperation({
            left,
            operation: operation,
            right: Number(currentValue),
          })
        : String(Number(currentValue) * (isNegative ? -1 : 1)),
    };
  }

  return {
    isReadingValue: false,
    fromEquals: false,
    previousOperation: currentOperation,
    currentOperation: input,
  };
}
