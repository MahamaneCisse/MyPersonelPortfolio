import { BrowserRouter as Router } from "react-router-dom";
import "./css/App.css";
import { Navbar, Hero, About } from "./components/components";

const App = () => {
  return (
    <>
      <Router>
        <div className="relative z-0 overflow-x-hidden text-primaryTxt">
          <Navbar />
          <Hero />
          <div className="relative text-primaryTxt">
            <About /> 
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
