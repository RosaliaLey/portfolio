import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
