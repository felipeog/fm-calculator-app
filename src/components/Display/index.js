import calculator from "../../stores/calculator";

import "./index.css";

function Display() {
  const getDisplayContent = () => {
    if (calculator.displayContent.length) {
      return new Intl.NumberFormat().format(calculator.displayContent);
    }

    return calculator.displayContent;
  };

  return (
    <div class="Display">
      <p class="Display__content">{getDisplayContent()}</p>
    </div>
  );
}

export default Display;
