import { logArguments } from "../utils/logArguments";
import { applyOperation } from "../utils/applyOperation";

function handleEquals({
  currentValue,
  previousValue,
  currentOperation,
  fromEquals,
  previousOperation,
  result,
}) {
  logArguments("handleEquals", arguments);

  const operation = currentOperation || previousOperation;

  if (!operation.length || (!previousValue.length && !currentValue.length)) {
    return;
  }

  const defaultProperties = {
    isReadingValue: false,
    fromEquals: true,
    currentValue: "",
    previousOperation: operation,
    currentOperation: "",
  };

  if (previousValue.length && currentValue.length) {
    return {
      ...defaultProperties,
      previousValue: currentValue,
      result: applyOperation({
        left: Number(fromEquals ? previousValue : result),
        operation,
        right: Number(currentValue),
      }),
    };
  }

  const newPreviousValue = currentValue || previousValue || result;

  return {
    ...defaultProperties,
    previousValue: newPreviousValue,
    result: applyOperation({
      left: Number(result || "0"),
      operation,
      right: Number(newPreviousValue),
    }),
  };
}

export { handleEquals };
