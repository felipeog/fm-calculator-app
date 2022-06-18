import classNames from "classnames";

import { transition } from "../../stores/transition";
import "./index.css";

function Button(props) {
  function handleButtonClick() {
    return [props.handler, props.value];
  }

  function isButtonActive() {
    return (
      transition.keyboard.isTransitioning &&
      transition.keyboard.button === props.value
    );
  }

  return (
    <button
      class={classNames("Button", props.className, {
        "Button--active": isButtonActive(),
      })}
      onClick={handleButtonClick()}
    >
      {props.value}
    </button>
  );
}

export { Button };
