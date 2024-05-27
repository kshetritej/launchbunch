import About from "./About";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import LevelUp from "./LevelUp";
import Footer from "./Footer";
import CaseStudies from "./CaseStudies";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <CaseStudies/>
      <Blogs/>
      <Testimonials/>
      <LevelUp />
      <Footer />
    </div>
  );
};

export default Homepage;
