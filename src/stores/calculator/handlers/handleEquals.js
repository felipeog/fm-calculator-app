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
    const right = Number(currentValue);

    return {
      isReadingValue: false,
      fromEquals: true,
      previousValue: String(right),
      currentValue: "",
      previousOperation: operation,
      currentOperation: "",
      result: applyOperation({
        left: Number(fromEquals ? previousValue : result),
        operation,
        right,
      }),
    };
  }

  const value = currentValue || previousValue || result;
  const left = Number(result || "0");
  const right = Number(value);

  return {
    isReadingValue: false,
    fromEquals: true,
    previousValue: value,
    currentValue: "",
    previousOperation: operation,
    currentOperation: "",
    result: applyOperation({
      left,
      operation,
      right,
    }),
  };
}
