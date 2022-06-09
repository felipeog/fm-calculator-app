import { logArguments } from "../utils/logArguments";

function handleDelete({ currentValue }, isReadingValue) {
  logArguments("handleDelete", arguments);

  const newCurrentValue = currentValue.length
    ? currentValue.slice(0, -1)
    : currentValue;

  return {
    currentValue: isReadingValue ? newCurrentValue : currentValue,
  };
}

export { handleDelete };
