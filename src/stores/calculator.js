import { createStore } from "solid-js/store";
import big from "big.js";
import { DEV } from "solid-js";

function logArguments(functionName, functionArguments) {
  if (DEV) {
    console.log(functionName, JSON.stringify(...functionArguments, null, 2));
  }
}

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
  logArguments("handleKeyboardInput", arguments);

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
      case "x":
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
  logArguments("handleNumber", arguments);

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
  logArguments("handleDelete", arguments);

  if (calculator.isReadingValue) {
    return {
      currentValue:
        currentValue.length > 0 ? currentValue.slice(0, -1) : currentValue,
    };
  }
}

function handleDecimal({ currentValue }) {
  logArguments("handleDecimal", arguments);

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
  logArguments("handleReset", arguments);

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
  { currentValue, currentOperation, previousOperation, result }
) {
  logArguments("handleOperation", arguments);

  const operation = currentOperation || input;
  const isLastOperationEquals = previousOperation === "=";

  if (isLastOperationEquals) {
    return {
      isReadingValue: false,
      previousOperation: currentOperation,
      currentOperation: input,
      previousValue: currentValue,
      currentValue: "",
      result: currentValue || result,
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
  };
}

function handleEquals({
  currentValue,
  previousValue,
  currentOperation,
  result,
}) {
  logArguments("handleEquals", arguments);

  if (!result.length && !previousValue.length && !currentValue.length) {
    return;
  }

  if (currentOperation.length) {
    const value = currentValue || previousValue || result;

    return {
      isReadingValue: false,
      previousValue: value,
      currentValue: "",
      previousOperation: "=",
      result: applyOperation({
        left: Number(result || previousValue || currentValue || "0"),
        operation: currentOperation,
        right: Number(value),
      }),
    };
  }
}

// https://www.avioconsulting.com/blog/overcoming-javascript-numeric-precision-issues
function applyOperation({ left, operation, right }) {
  logArguments("applyOperation", arguments);

  try {
    switch (operation) {
      case "-":
        return big(left).minus(big(right)).toString();

      case "x":
        return big(left).times(big(right)).toString();

      case "/":
        return big(left).div(big(right)).toString();

      case "+":
        return big(left).plus(big(right)).toString();
    }
  } catch (error) {
    if (error?.message?.includes("big.js")) {
      alert(error.message.replace("big.js", "Error"));
    } else {
      alert("[Error] Internal error");
    }

    return "0";
  }
}

export default calculator;
