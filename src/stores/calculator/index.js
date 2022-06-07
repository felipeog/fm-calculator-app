import { createStore } from "solid-js/store";
import { logArguments } from "./utils/logArguments";
import { handleDelete } from "./handlers/handleDelete";
import { handleDecimal } from "./handlers/handleDecimal";
import { handleReset } from "./handlers/handleReset";
import { handleEquals } from "./handlers/handleEquals";
import { handleOperation } from "./handlers/handleOperation";
import { handleNumber } from "./handlers/handleNumber";

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
        return handleDelete(calculator.isReadingValue, prevCalculator);

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

export default calculator;
