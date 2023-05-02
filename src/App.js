import "./App.css";
import Docs from "./components/Docs";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Working from "./components/Working";
import Roadmap from "./components/Roadmap";
import Mission from "./components/Mission";
import Tokenomics from "./components/Tokenomics";
import Team1 from "./components/Team1";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero2 />
      <Offers />
      <Working />
      <Roadmap />
      <Mission />
      <Tokenomics />
      <Team1 />
      <Docs />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
