import "./App.css";
import "./assets/css/SpecialComponentStyle.css";
import Header from "./shared/Header";
import AddProduct from "./views/pages/AddProduct";
import Home from "./views/pages/Home";
import Product from "./views/pages/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Magaza from "./views/pages/Magaza";
function App() {
  return (
    <div className="App">
      <span className="AppFrontWrapper"></span>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/addproduct" exact>
            <AddProduct />
          </Route>
          <Route path="/Magaza" exact>
            <Magaza />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
