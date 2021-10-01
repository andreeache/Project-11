import { Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Property from "./Components/Property";
import About from "./Components/About";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import data from "./Components/data";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage data={data} />
        </Route>
        <Route path="/Property">
          <Property></Property>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
