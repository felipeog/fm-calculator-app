import { logArguments } from "../utils/logArguments";

export function handleDelete({ currentValue }, isReadingValue) {
  logArguments("handleDelete", arguments);

  const value = currentValue.length ? currentValue.slice(0, -1) : currentValue;

  if (isReadingValue) {
    return {
      currentValue: value,
    };
  }
}
