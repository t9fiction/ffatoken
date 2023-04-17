import "./App.css";
import Docs from "./components/Docs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Working from "./components/Working";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Offers />
      <Working />
      <Docs />
    </div>
  );
}

export default App;
