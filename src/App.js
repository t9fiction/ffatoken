import "./App.css";
import Docs from "./components/Docs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Working from "./components/Working";
import Roadmap from "./components/Roadmap";
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Offers />
      <Working />
      <Roadmap />
      <Docs />
    </div>
  );
}

export default App;
