import { For } from "solid-js";

import Button from "../Button";
import { handleKeyboardInput } from "../../stores/calculator";
import "./index.css";

function Buttons({ buttons, handler }) {
  return (
    <For each={buttons}>
      {(button) => <Button handler={handler} {...button} />}
    </For>
  );
}

function Keyboard() {
  function handleButtonClick(data) {
    handleKeyboardInput(data);
  }

  const topButtons = [
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "del", color: "navy" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "+" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "-" },
    { value: "." },
    { value: "0" },
    { value: "/" },
    { value: "x" },
  ];
  const bottomButtons = [
    { value: "reset", color: "navy" },
    { value: "=", color: "tomato" },
  ];

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
