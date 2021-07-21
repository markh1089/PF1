import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
