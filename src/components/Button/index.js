import classNames from "classnames";

import "./index.css";

function Button({ handler, value, className }) {
  return (
    <button class={classNames("Button", className)} onClick={[handler, value]}>
      {value}
    </button>
  );
}

export { Button };
