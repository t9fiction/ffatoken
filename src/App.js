import "./App.css";
import Docs from "./components/Docs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Offers />
      <Docs />
    </div>
  );
}

export default App;
