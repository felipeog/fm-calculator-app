import { logArguments } from "../utils/logArguments";

export function handleDecimal({ currentValue }) {
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
