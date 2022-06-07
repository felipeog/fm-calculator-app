import { logArguments } from "../utils/logArguments";

export function handleDelete(isReadingValue, { currentValue }) {
  logArguments("handleDelete", arguments);

  if (isReadingValue) {
    return {
      currentValue:
        currentValue.length > 0 ? currentValue.slice(0, -1) : currentValue,
    };
  }
}
