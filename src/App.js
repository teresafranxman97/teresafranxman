import React, {useState} from "react";
import { Route, Routes } from "react-router-dom" ;
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

import data from './data';

function App() {
  const [ projects ] = useState(data);

  return ( 
    <div>
      <Navbar/>

      <Routes>
        <Route exact path="/teresafranxman" element={<Home/> } />  
        <Route path="/projects" element={<Projects projects={projects}/>  } />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
