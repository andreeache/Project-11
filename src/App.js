import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import data from "./Components/data";

function App() {
  

  return (
    <div>
      <Nav />
      <Banner />
      <Homepage data={data} />
      <Footer />
    </div>
  );
}

export default App;
