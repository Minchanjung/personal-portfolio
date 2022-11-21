import './App.css';
import Header from './components/Header';
import Graphic from "./components/Graphic";
import About from "./components/About";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <Header />
      <Socials />
      <div className="contentMargins">
        <Graphic />
        <About />
      </div>
      
    </div>
  );
}

export default App;