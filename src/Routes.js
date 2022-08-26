import React from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
  import About from './Pages/About';
  import  Menu from './Pages/Menu';
  import  Gallery from './Pages/Gallery';
  import  Accolades from './Pages/Accolades';
  import  Contact from './Pages/Contact';
  import  Blog from './Pages/Blog';
  import  BlogContent from './Pages/BlogContent';
  import  Home from './Pages/Home';
  import  Reservation from './Pages/Reservation';
const Routes1 = () => {
  return (
       <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/menu" element={<Menu />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/blogcontent/:id/news" element={<BlogContent />} />
             <Route path="/accolades" element={<Accolades />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/reservation" element={<Reservation />} />
        </Routes>

  )
}
export default Routes1