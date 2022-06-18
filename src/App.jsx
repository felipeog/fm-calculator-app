import { Header } from "./components/Header";
import { Display } from "./components/Display";
import { Keyboard } from "./components/Keyboard";

function App() {
  return (
    <div class="App">
      <main class="App-container">
        <Header />
        <Display />
        <Keyboard />
      </main>
    </div>
  );
}

export { App };
