import { BrowserRouter } from "react-router-dom";
import About from "./About";
import Clients from "./Clients";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import Projects from "./Projects";
import LevelUp from "./LevelUp";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Clients />
        <About />
        <Services />
        <Projects />
        <LevelUp/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
