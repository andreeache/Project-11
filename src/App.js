import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Apartment from "./Components/Apartment";
import About from "./Components/About";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import data from "./Components/data";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage data={data} />
        </Route>
        <Route path="/Project-11" exact>
          <Homepage data={data} />
        </Route>
        <Route path="/apartment/:id">
          <Apartment />
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
