import { handleKeyboardInput } from "../../stores/calculator";

import "./index.css";

function Keyboard() {
  function handleButtonClick(data) {
    handleKeyboardInput(data);
  }

  return (
    <div class="Keyboard">
      <div className="Keyboard__top">
        <button onClick={[handleButtonClick, 7]}>7</button>
        <button onClick={[handleButtonClick, 8]}>8</button>
        <button onClick={[handleButtonClick, 9]}>9</button>
        <button disabled onClick={[handleButtonClick, "del"]}>
          del
        </button>
        <button onClick={[handleButtonClick, 4]}>4</button>
        <button onClick={[handleButtonClick, 5]}>5</button>
        <button onClick={[handleButtonClick, 6]}>6</button>
        <button onClick={[handleButtonClick, "+"]}>+</button>
        <button onClick={[handleButtonClick, 1]}>1</button>
        <button onClick={[handleButtonClick, 2]}>2</button>
        <button onClick={[handleButtonClick, 3]}>3</button>
        <button onClick={[handleButtonClick, "-"]}>-</button>
        <button disabled onClick={[handleButtonClick, "."]}>
          .
        </button>
        <button onClick={[handleButtonClick, 0]}>0</button>
        <button onClick={[handleButtonClick, "/"]}>/</button>
        <button onClick={[handleButtonClick, "*"]}>x</button>
      </div>

      <div className="Keyboard__bottom">
        <button onClick={[handleButtonClick, "reset"]}>reset</button>
        <button onClick={[handleButtonClick, "="]}>=</button>
      </div>
    </div>
  );
}

export default Keyboard;
