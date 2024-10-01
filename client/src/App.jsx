import "./App.css";
import Home from "./pages/home";
import Canvas from "./canvas";
import Customizer from "./pages/customizer";

function App() {
  return (
    <main className="app trnasition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
