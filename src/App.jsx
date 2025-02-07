import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import AboutMe from "./sections/AboutMe";
import MyProjects from "./sections/MyProjects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <MyProjects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
