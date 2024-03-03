
//import Resume fro

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Contact from './containers/contact';
import About from './containers/about';
import Home from './containers/home';
import NavBar from './components/navBar';

function App() {

  return (
    <div className="App">

      {/*particles js*/}
      {/* <Particles id="particles" init ={handleInit}/> */}

      {/* <NavBar /> */}
      <NavBar/>

      {/* main page content */}


      <div className="App__main-page-content">
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
      </div>

    </div>
  );
}

export default App;
