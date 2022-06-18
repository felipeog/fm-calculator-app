import { ThemeSelector } from "../ThemeSelector";
import "./index.css";

function Header() {
  return (
    <header class="Header">
      <h1 class="Header__title">calc</h1>

      <ThemeSelector />
    </header>
  );
}

export { Header };
