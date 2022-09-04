
import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
// import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Videos from "./components/Videos";

function App() {

  return (
    <div>
      <Navigation/>
      <Home/>
      <About/>
      {/* <Internships/> */}
      <Projects/>
      <Videos/>
      <Contact/>

    </div>
  );
}

export default App;
