import { For } from "solid-js";
// import calculator, { handleKeyboardInput } from "../../stores/calculator";
import { handleKeyboardInput } from "../../stores/calculator";

import "./index.css";

function Buttons({ buttons, handler }) {
  return (
    <For each={buttons}>
      {(character) => (
        <button onClick={[handler, character]}>{character}</button>
      )}
    </For>
  );
}

function Keyboard() {
  function handleButtonClick(data) {
    handleKeyboardInput(data);
  }

  // const isDeleteButtonDisabled = () => {
  //   return calculator.currentValue.length === 0 || !calculator.isReadingValue;
  // };

  const topButtons = [
    "7",
    "8",
    "9",
    "del",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];
  const bottomButtons = ["reset", "="];

  return (
    <div class="Keyboard">
      <div className="Keyboard__top">
        <Buttons buttons={topButtons} handler={handleButtonClick} />
      </div>

      <div className="Keyboard__bottom">
        <Buttons buttons={bottomButtons} handler={handleButtonClick} />
      </div>
    </div>
  );
}

export default Keyboard;
