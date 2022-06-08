import { logArguments } from "../utils/logArguments";
import { applyOperation } from "../utils/applyOperation";

export function handleEquals({
  currentValue,
  previousValue,
  currentOperation,
  fromEquals,
  previousOperation,
  result,
}) {
  logArguments("handleEquals", arguments);

  const operation = currentOperation || previousOperation;

  if (!operation.length) {
    return;
  }

  if (previousValue.length && currentValue.length) {
    return {
      isReadingValue: false,
      fromEquals: true,
      previousValue: currentValue,
      currentValue: "",
      previousOperation: operation,
      currentOperation: "",
      result: applyOperation({
        left: Number(fromEquals ? previousValue : result),
        operation,
        right: Number(currentValue),
      }),
    };
  }

  const value = currentValue || previousValue || result;

  return {
    isReadingValue: false,
    fromEquals: true,
    previousValue: value,
    currentValue: "",
    previousOperation: operation,
    currentOperation: "",
    result: applyOperation({
      left: Number(result || "0"),
      operation,
      right: Number(value),
    }),
  };
}
