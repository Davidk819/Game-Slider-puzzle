import "./App.css";
import { GameProvider } from "./context/GameContext";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <GameProvider>
        <Home />
      </GameProvider>{" "}
    </>
  );
}

export default App;
