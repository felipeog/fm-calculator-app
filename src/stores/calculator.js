import { createStore } from "solid-js/store";
import big from "big.js";

const [calculator, setCalculator] = createStore({
  previousOperation: "",
  currentOperation: "",
  previousValue: "",
  currentValue: "",
  result: "",
  isReadingValue: false,
  get displayContent() {
    if (this.isReadingValue) {
      return this.currentValue;
    }

    return this.result;
  },
});

export function handleKeyboardInput(input) {
  setCalculator((prevCalculator) => {
    switch (input) {
      case "del":
        return handleDelete(prevCalculator);

      case ".":
        return handleDecimal(prevCalculator);

      case "reset":
        return handleReset();

      case "=":
        return handleEquals(prevCalculator);

      case "+":
      case "-":
      case "/":
      case "*":
        return handleOperation(input, prevCalculator);

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return handleNumber(input, prevCalculator);

      default:
        return prevCalculator;
    }
  });
}

function handleNumber(input, { currentValue }) {
  if (currentValue === "0" && input === "0") {
    return {
      isReadingValue: true,
    };
  }

  return {
    isReadingValue: true,
    currentValue: `${currentValue}${input}`,
  };
}

function handleDelete({ currentValue }) {
  if (calculator.isReadingValue) {
    return {
      currentValue:
        currentValue.length > 0 ? currentValue.slice(0, -1) : currentValue,
    };
  }
}

function handleDecimal({ currentValue }) {
  if (!currentValue.length) {
    return {
      isReadingValue: true,
      currentValue: "0.",
    };
  }

  if (currentValue.includes(".")) {
    return {
      isReadingValue: true,
    };
  }

  return {
    isReadingValue: true,
    currentValue: `${currentValue}.`,
  };
}

function handleReset() {
  return {
    previousOperation: "",
    currentOperation: "",
    previousValue: "",
    currentValue: "",
    result: "",
    isReadingValue: false,
  };
}

function handleOperation(
  input,
  { currentValue, previousValue, currentOperation, previousOperation, result }
) {
  const operation = currentOperation || input;
  const isLastOperationEquals = previousOperation === "=";

  if (isLastOperationEquals) {
    return {
      isReadingValue: false,
      previousOperation: currentOperation,
      currentOperation: input,
    };
  }

  if (currentValue.length) {
    return {
      isReadingValue: false,
      previousValue: currentValue,
      currentValue: "",
      previousOperation: currentOperation,
      currentOperation: input,
      result: result.length
        ? applyOperation({
            left: Number(result),
            operation: operation,
            right: Number(currentValue),
          })
        : currentValue,
    };
  }

  return {
    isReadingValue: false,
    previousOperation: currentOperation,
    currentOperation: input,
    result: previousValue,
  };
}

function handleEquals({
  currentValue,
  previousValue,
  currentOperation,
  result,
}) {
  if (!previousValue.length && !currentValue.length) {
    return;
  }

  if (currentOperation.length) {
    const value = currentValue.length ? currentValue : previousValue;

    return {
      isReadingValue: false,
      previousValue: value,
      currentValue: "",
      previousOperation: "=",
      result: applyOperation({
        left: Number(result || "0"),
        operation: currentOperation,
        right: Number(value),
      }),
    };
  }
}

function applyOperation({ left, operation, right }) {
  try {
    switch (operation) {
      case "-":
        return big(left).minus(big(right)).toString();

      case "*":
        return big(left).times(big(right)).toString();

      case "/":
        return big(left).div(big(right)).toString();

      case "+":
        return big(left).plus(big(right)).toString();
    }
  } catch (error) {
    return error?.message ?? "Error";
  }
}

export default calculator;
