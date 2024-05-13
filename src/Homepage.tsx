import About from "./About";
import Clients from "./Clients";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import Projects from "./Projects";
import LevelUp from "./LevelUp";
import Footer from "./Footer";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Clients />
      <About />
      <Services />
      <Projects />
      <LevelUp />
      <Footer />
    </div>
  );
};

export default Homepage;
