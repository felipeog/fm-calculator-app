import { logArguments } from "../utils/logArguments";

export function handleDecimal({ currentValue }) {
  logArguments("handleDecimal", arguments);

  const defaultProperties = {
    isReadingValue: true,
  };

  if (!currentValue.length) {
    return {
      ...defaultProperties,
      currentValue: "0.",
    };
  }

  if (currentValue.includes(".")) {
    return {
      ...defaultProperties,
      currentValue: currentValue,
    };
  }

  return {
    ...defaultProperties,
    currentValue: `${currentValue}.`,
  };
}
