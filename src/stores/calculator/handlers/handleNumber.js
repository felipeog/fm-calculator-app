import big from "big.js";
import { logArguments } from "../utils/logArguments";
import { boundaries } from "../../../consts/boundaries";
import { decimalPrecision } from "../../../consts/decimalPrecision";

function handleNumber({ currentValue }, input) {
  logArguments("handleNumber", arguments);

  const newCurrentValue =
    currentValue === "0" ? input : `${currentValue}${input}`;
  const defaultProperties = {
    isReadingValue: true,
  };

  if (
    big(newCurrentValue).gte(boundaries.upper) ||
    big(newCurrentValue).lte(boundaries.lower)
  ) {
    return {
      ...defaultProperties,
      currentValue: currentValue,
    };
  }

  if (newCurrentValue.includes(".")) {
    const [integer, decimals] = newCurrentValue.split(".");

    return {
      ...defaultProperties,
      currentValue: `${integer}.${decimals.slice(0, decimalPrecision)}`,
    };
  }

  return {
    ...defaultProperties,
    currentValue: newCurrentValue,
  };
}

export { handleNumber };
