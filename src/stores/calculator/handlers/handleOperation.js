import { logArguments } from "../utils/logArguments";
import { applyOperation } from "../utils/applyOperation";

export function handleOperation(
  { previousValue, currentValue, currentOperation, result, fromEquals },
  input
) {
  logArguments("handleOperation", arguments);

  const defaultProperties = {
    isReadingValue: false,
    fromEquals: false,
    previousOperation: currentOperation,
    currentOperation: input,
  };

  if (!currentValue.length) {
    return defaultProperties;
  }

  if (fromEquals) {
    return {
      ...defaultProperties,
      currentValue: "",
      previousValue: currentValue,
      result: currentValue || result,
    };
  }

  const operation = currentOperation || input;
  const isNegative = currentOperation === "-";
  const newPreviousValue = String(Number(currentValue) * (isNegative ? -1 : 1));
  const hasBothValues = currentValue.length && previousValue.length;
  const newResult = result.length
    ? applyOperation({
        left: Number(result),
        operation: operation,
        right: Number(currentValue),
      })
    : newPreviousValue;

  return {
    ...defaultProperties,
    currentValue: "",
    previousValue: hasBothValues ? newResult : newPreviousValue,
    result: newResult,
  };
}
