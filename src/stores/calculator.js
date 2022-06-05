import { DEV } from "solid-js";
import { createStore } from "solid-js/store";
import big from "big.js";

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
  fromEquals: false,
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
    fromEquals: false,
  };
}

function handleOperation(
  input,
  { currentValue, currentOperation, previousOperation, result, fromEquals }
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
    const right = Number(currentValue) * (isNegative ? -1 : 1);

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
            right,
          })
        : String(right),
    };
  }

  return {
    isReadingValue: false,
    fromEquals: false,
    previousOperation: currentOperation,
    currentOperation: input,
  };
}

function handleEquals({
  currentValue,
  previousValue,
  currentOperation,
  fromEquals,
  previousOperation,
  result,
}) {
  logArguments("handleEquals", arguments);

  if (!previousOperation.length && !currentOperation.length) {
    return;
  }

  if (previousValue.length && currentValue.length) {
    const right = Number(currentValue);
    const operation = currentOperation;

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
  const operation = currentOperation || previousOperation;
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

// https://www.avioconsulting.com/blog/overcoming-javascript-numeric-precision-issues
function applyOperation({ left, operation, right }) {
  logArguments("applyOperation", arguments);

  try {
    let result;

    switch (operation) {
      case "-":
        result = big(left).minus(big(right));
        break;

      case "x":
        result = big(left).times(big(right));
        break;

      case "/":
        result = big(left).div(big(right));
        break;

      case "+":
        result = big(left).plus(big(right));
        break;
    }

    if (result.gt(999_999_999_999) || result.lt(-999_999_999_999)) {
      throw Error("[big.js] Out of bounds");
    }

    return result.toString();
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
