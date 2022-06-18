import classNames from "classnames";

import { transition } from "../../stores/transition";
import "./index.css";

function Button(props) {
  return (
    <button
      class={classNames("Button", props.className, {
        "Button--active":
          transition.keyboard.isTransitioning &&
          props.value === transition.keyboard.button,
      })}
      // eslint-disable-next-line solid/reactivity
      onClick={[props.handler, props.value]}
    >
      {props.value}
    </button>
  );
}

export { Button };
