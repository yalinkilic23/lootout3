import "./App.css";
import "./assets/css/SpecialComponentStyle.css";
import Header from "./shared/Header";
import Home from "./views/pages/Home";
import Product from "./views/pages/Product";

function App() {
  return (
    <div className="App">
      <span className="AppFrontWrapper"></span>
      {/* <Home /> */}
      <Product />
    </div>
  );
}

export default App;
