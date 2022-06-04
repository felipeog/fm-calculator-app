import "./index.css";

function Button({ handler, value, color }) {
  const style = color?.length ? { "background-color": color } : {};

  return (
    <button class="Button" onClick={[handler, value]} style={style}>
      {value}
    </button>
  );
}

export default Button;
