import { For } from "solid-js";

import { Button } from "../Button";
import { handleKeyboardInput } from "../../stores/calculator";
import { handleDisplayTransition } from "../../stores/transition";
import "./index.css";

function Buttons({ buttons, handler }) {
  return (
    <For each={buttons}>
      {(button) => <Button handler={handler} {...button} />}
    </For>
  );
}

function Keyboard() {
  function handleButtonClick(input) {
    handleDisplayTransition(input);
    handleKeyboardInput(input);
  }

  const topButtons = [
    { value: "7", className: "Keyboard__default-button" },
    { value: "8", className: "Keyboard__default-button" },
    { value: "9", className: "Keyboard__default-button" },
    { value: "del", className: "Keyboard__action-button" },
    { value: "4", className: "Keyboard__default-button" },
    { value: "5", className: "Keyboard__default-button" },
    { value: "6", className: "Keyboard__default-button" },
    { value: "+", className: "Keyboard__default-button" },
    { value: "1", className: "Keyboard__default-button" },
    { value: "2", className: "Keyboard__default-button" },
    { value: "3", className: "Keyboard__default-button" },
    { value: "-", className: "Keyboard__default-button" },
    { value: ".", className: "Keyboard__default-button" },
    { value: "0", className: "Keyboard__default-button" },
    { value: "/", className: "Keyboard__default-button" },
    { value: "x", className: "Keyboard__default-button" },
  ];
  const bottomButtons = [
    { value: "reset", className: "Keyboard__action-button" },
    { value: "=", className: "Keyboard__equals-button" },
  ];

  return (
    <section class="Keyboard">
      <div className="Keyboard__top">
        <Buttons buttons={topButtons} handler={handleButtonClick} />
      </div>

      <div className="Keyboard__bottom">
        <Buttons buttons={bottomButtons} handler={handleButtonClick} />
      </div>
    </section>
  );
}

export { Keyboard };
