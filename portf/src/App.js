import React from 'react';

import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import './assets/qualification.css';
import './App.css';
import './assets/home.css';
import './assets/projects.css';
import Header from './components/header';
import Qualification from './components/quallification';
import Projects from './components/projects';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
            
            <Route  path='/home' element={<Home/>} /> 
        <Route  path='/qualification' element={<Qualification/>} /> 
       <Route  path='/projects' element={<Projects/>} />
       </Routes>
        </div>
   
      
   </Router>
  );
}

export default App;
/**/ 