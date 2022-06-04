import { createStore } from "solid-js/store";

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
  let result;

  setCalculator((prevCalculator) => {
    switch (input) {
      case "del":
        return handleDelete(prevCalculator);

      case ".":
        return handleDecimal(input, prevCalculator);

      case "reset":
        return handleReset();

      case "=":
        result = handleEquals(prevCalculator);
        console.log("handleEquals", JSON.stringify(result, null, 2));
        return result;

      case "+":
      case "-":
      case "/":
      case "*":
        result = handleOperation(input, prevCalculator);
        console.log("handleOperation", JSON.stringify(result, null, 2));
        return result;

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
        result = handleNumber(input, prevCalculator);
        console.log("handleNumber", JSON.stringify(result, null, 2));
        return result;

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
    currentValue: currentValue + input,
  };
}

function handleDelete({ currentValue }) {
  return {
    currentValue:
      currentValue.length > 0 ? currentValue.slice(0, -1) : currentValue,
  };
}

function handleDecimal(input, { currentValue }) {
  return {
    currentValue: currentValue.includes(".")
      ? currentValue
      : currentValue + input,
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
  { currentValue, currentOperation, previousOperation, result }
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
    const evalExpression = result.length
      ? result + operation + currentValue
      : currentValue;

    console.log("🚀 ~ currentValue", currentValue);
    console.log("🚀 ~ evalExpression", evalExpression);

    return {
      isReadingValue: false,
      previousValue: currentValue,
      currentValue: "",
      previousOperation: currentOperation,
      currentOperation: input,
      result: String(eval(evalExpression)),
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
  if (!previousValue.length && !currentValue.length) {
    return;
  }

  if (currentOperation.length) {
    const value = currentValue.length ? currentValue : previousValue;
    const evalExpression = (result || "0") + currentOperation + value;

    console.log("🚀 ~ currentOperation", currentOperation);
    console.log("🚀 ~ value", value);
    console.log("🚀 ~ evalExpression", evalExpression);

    return {
      isReadingValue: false,
      previousValue: value,
      currentValue: "",
      previousOperation: "=",
      result: String(eval(evalExpression)),
    };
  }
}

export default calculator;
