import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'; 
import Header from './Header';
import PostButton from './PostButton';
import LoginButton from './LoginButton';
import HomePage from './routes/HomePage'
import AboutPage from "./routes/AboutPage";
import Login from "./Login";
import Signup from "./Signup";  


function App() {
  return (

    <Routes>
      <Route path='/' element={<HomePage />} />
     <Route path='/about' element={<AboutPage />} />
     <Route path='/login' element={<Login />} />
     <Route path='/signup' element={<Signup />} />

    </Routes>

    
  );
}

export default App;

