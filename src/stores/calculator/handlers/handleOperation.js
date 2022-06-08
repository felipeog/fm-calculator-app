import { logArguments } from "../utils/logArguments";
import { applyOperation } from "../utils/applyOperation";

export function handleOperation(
  { currentValue, currentOperation, result, fromEquals },
  input
) {
  logArguments("handleOperation", arguments);

  const operation = currentOperation || input;
  const defaultProperties = {
    isReadingValue: false,
    fromEquals: false,
    previousOperation: currentOperation,
    currentOperation: input,
  };

  if (fromEquals) {
    return {
      ...defaultProperties,
      currentValue: "",
      previousValue: currentValue,
      result: currentValue || result,
    };
  }

  if (currentValue.length) {
    const isNegative = currentOperation === "-";

    return {
      ...defaultProperties,
      currentValue: "",
      previousValue: currentValue,
      result: result.length
        ? applyOperation({
            left: Number(result),
            operation: operation,
            right: Number(currentValue),
          })
        : String(Number(currentValue) * (isNegative ? -1 : 1)),
    };
  }

  return defaultProperties;
}
