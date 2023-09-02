import React  from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './component/routes/Home';
import About from './component/routes/About';
import Services from './component/routes/Services';
import Schedule from './component/routes/Schedule';
import Gallery from './component/routes/Gallery';
import Blog from './component/routes/Blog'
import Contact from './component/routes/Contact';

const App=()=>{
  return(
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;
