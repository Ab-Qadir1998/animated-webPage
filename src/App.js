import React from 'react';
import Navigation from './components/Nav'
import Home from './components/Home'
import Features from './components/Features'
import Communicate from './components/Communicate'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import './App.css'
function App() {
  return (
    <div>
        <Navigation/>
        <Home/>
        <Features/>
        <Communicate/>
        <About/>
        <Testimonial/>
        <Contact/>
   </div>  
  );
}

export default App;
