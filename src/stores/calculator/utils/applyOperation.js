import big from "big.js";
import { logArguments } from "./logArguments";
import { boundaries } from "../../../consts/boundaries";
import { decimalPrecision } from "../../../consts/decimalPrecision";

// https://www.avioconsulting.com/blog/overcoming-javascript-numeric-precision-issues
function applyOperation({ left, operation, right }) {
  logArguments("applyOperation", arguments);

  try {
    if (operation === "/" && right === 0) {
      throw Error("[Error]: Division by zero");
    }

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

    if (result.gte(boundaries.upper) || result.lte(boundaries.lower)) {
      throw Error("[Error]: Out of bounds");
    }

    if (result.toString().includes(".")) {
      const resultFixedPrecision = result.toFixed(decimalPrecision);
      const resultWithoutTrailingZeros = String(Number(resultFixedPrecision));

      return resultWithoutTrailingZeros;
    }

    return result.toString();
  } catch (error) {
    const message = error?.message ?? "[Error] Internal error";

    console.log(message);
    window.alert(message);

    return "";
  }
}

export { applyOperation };
