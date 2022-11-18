import './App.css';
import Header from './components/Header';
import Graphic from "./components/Graphic";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <div className="contentMargins">
        <Graphic />
        <About />
      </div>
      
    </div>
  );
}

export default App;