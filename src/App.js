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
import MP from './Components/App/Results/MP';
import pic from './images//flag.png';
import { Helmet } from 'react-helmet';

// SEO Wrapper Component
function SEOWrapper({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{title} - Kenya Elections</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Kenya Elections`} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={`${title} - Kenya Elections`} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <div className="flag-container">
          <img src={pic} alt="Kenya Flag" className="flag" id="flag" />
          <div className="flag-overlay"></div>
        </div>
        
        {/* Router Configuration */}
        <div className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <SEOWrapper 
                  title="Home" 
                  description="Kenya Elections Results Portal - Access comprehensive election results and information"
                >
                  <Home />
                </SEOWrapper>
              } 
            />
            <Route 
              path="/about" 
              element={
                <SEOWrapper 
                  title="About" 
                  description="Learn more about Kenya Elections Results Portal and our mission"
                >
                  <About />
                </SEOWrapper>
              } 
            />
            <Route 
              path="/President" 
              element={
                <SEOWrapper 
                  title="Presidential Results" 
                  description="View comprehensive presidential election results for Kenya"
                >
                  <President />
                </SEOWrapper>
              } 
            />
            <Route 
              path="/Governor" 
              element={
                <SEOWrapper 
                  title="Governor Results" 
                  description="Access governor election results by county across Kenya"
                >
                  <Governor />
                </SEOWrapper>
              } 
            />
            <Route 
              path="/MCA" 
              element={
                <SEOWrapper 
                  title="MCA Results" 
                  description="Member of County Assembly election results and statistics"
                >
                  <MCA />
                </SEOWrapper>
              } 
            />
            <Route 
              path="/Senator" 
              element={
                <SEOWrapper 
                  title="Senator Results" 
                  description="Senate election results by county and constituency"
                >
                  <Senator />
                </SEOWrapper>
              } 
            />
            <Route 
              path="/Womanrep" 
              element={
                <SEOWrapper 
                  title="Women Representative Results" 
                  description="Women's Representative election results across all counties"
                >
                  <Womanrep />
                </SEOWrapper>
              } 
            />
            <Route 
              path="/MP" 
              element={
                <SEOWrapper 
                  title="MP Results" 
                  description="Member of Parliament election results by constituency"
                >
                  <MP />
                </SEOWrapper>
              } 
            />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;