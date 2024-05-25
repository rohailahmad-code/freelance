import React from 'react';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components/Header';
import BrowseJobs from './components/BrowseJobs';
import JobPost from './components/JobPost';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

   

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/browsejobs' element={<BrowseJobs />}/>
          <Route path='/jobpost' element={<JobPost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
