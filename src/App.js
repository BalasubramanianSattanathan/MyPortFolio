import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === '') {
      setIsDarkMode(true);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    const newTheme = !isDarkMode ? '' : 'light';
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={isDarkMode ? '' : 'light'}>
      {loading ? (
        <div className="loader">
          <HashLoader
            color={'#9067C6'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />
          <Nav toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <MoveToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
