import './App.css';
import Header from './components/Header';
import Graphic from "./components/Graphic";
import About from "./components/About";
import Socials from "./components/Socials";
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <Socials />
      <div className="contentMargins">
        <Graphic />
        <About />
        <Projects />
      </div>
      
    </div>
  );
}

export default App;