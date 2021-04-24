import "./App.css";
import "./assets/css/SpecialComponentStyle.css";
import Header from "./shared/Header";
import Home from "./views/pages/Home";

function App() {
  return (
    <div className="App">
      <span className="AppFrontWrapper"></span>
      <Home />
    </div>
  );
}

export default App;
