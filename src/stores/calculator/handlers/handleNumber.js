import big from "big.js";
import { logArguments } from "../utils/logArguments";
import { boundaries } from "../../../consts/boundaries";
import { decimalPrecision } from "../../../consts/decimalPrecision";

export function handleNumber({ currentValue }, input) {
  logArguments("handleNumber", arguments);

  const value = currentValue === "0" ? input : `${currentValue}${input}`;

  if (big(value).gte(boundaries.upper) || big(value).lte(boundaries.lower)) {
    return {
      isReadingValue: true,
      currentValue: currentValue,
    };
  }

  if (value.includes(".")) {
    const [integer, decimals] = value.split(".");

    return {
      isReadingValue: true,
      currentValue: `${integer}.${decimals.slice(0, decimalPrecision)}`,
    };
  }

  return {
    isReadingValue: true,
    currentValue: value,
  };
}
