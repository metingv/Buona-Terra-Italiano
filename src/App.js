
import './App.scss';
import './styles/Pages.scss';
import './styles/Component.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './Pages/About';
import  Menu from './Pages/Menu';
import  Gallery from './Pages/Gallery';
import  Accolades from './Pages/Accolades';
import  Contact from './Pages/Contact';
import  Home from './Pages/Home';
import  Sended from './Pages/Sended';

function App() {
  return (
    <BrowserRouter>  
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/menu" element={<Menu />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/accolades" element={<Accolades />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/sended" element={<Sended />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
