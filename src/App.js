import "./App.css";
import Docs from "./components/Docs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Working from "./components/Working";
import Roadmap from "./components/Roadmap";
import Mission from "./components/Mission";
import Tokenomics from "./components/Tokenomics";
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Offers />
      <Working />
      <Roadmap />
      <Mission />
      <Tokenomics />
      <Docs />
    </div>
  );
}

export default App;
