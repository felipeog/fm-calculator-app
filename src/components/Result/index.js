import calculator from "../../stores/calculator";

import "./index.css";

function Result() {
  return (
    <div class="Result">
      <h1>{new Intl.NumberFormat().format(calculator.displayContent)}</h1>
    </div>
  );
}

export default Result;
