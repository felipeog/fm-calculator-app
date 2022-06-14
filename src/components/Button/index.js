import classNames from "classnames";

import { transition } from "../../stores/transition";
import "./index.css";

function Button({ className, value, handler }) {
  return (
    <button
      class={classNames("Button", className, {
        "Button--active":
          transition.keyboard.isTransitioning &&
          value === transition.keyboard.button,
      })}
      onClick={[handler, value]}
    >
      {value}
    </button>
  );
}

export { Button };
