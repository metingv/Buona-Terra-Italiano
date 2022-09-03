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
  import  PrivacyPolicy from './Pages/Policy/PrivacyPolicy';
  import  CookiesPolicy from './Pages/Policy/PrivacyPolicy1';

const Routes1 = () => {
  return (
       <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/accolades" element={<Accolades />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/reservation" element={<Reservation />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/blogcontent/:header1/:id/news" element={<BlogContent />} />
             <Route path="/menu" element={<Menu />} />
             <Route path="/privacypolicy" element={<PrivacyPolicy />} />
             <Route path="/cookiespolicy" element={<CookiesPolicy />} />
             
        </Routes>

  )
}
export default Routes1