import "./App.css";
import Navbar from "./Components/App/Navbar";
import Home from "./Components/App/Home";
import Footer from "./Components/App/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Components/App/About";
import President from "./Components/App/Results/President";
import Governor from "./Components/App/Results/Governor";
import MCA from "./Components/App/Results/MCA";
import Senator from "./Components/App/Results/Senator";
import Womanrep from "./Components/App/Results/Womanrep";
import MP from './Components/App/Results/MP'

function App() {
  return (
    <div className="App">

      <Navbar />
      {/**configuring urls */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/President" element={<President />} />
          <Route path="/Governor" element={<Governor />} />
          <Route path="/MCA" element={<MCA />} />
          <Route path="/Senator" element={<Senator />} />
          <Route path="/Womanrep" element={<Womanrep />} />
          <Route path="/MP" element={<MP />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
