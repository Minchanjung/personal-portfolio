import './App.css';
import Header from './components/Header';
import Graphic from "./components/Graphic";
import About from "./components/About";
import Socials from "./components/Socials";
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Socials />
      <div className="contentMargins">
        <Graphic />
        <About />
        <Projects />
        <Contact />
      </div>
      <div className="copyRightContainer">
        <div className="copyRight">@ Copyright 2022, Minchan Jung</div>
      </div>
    </div>
  );
}

export default App;