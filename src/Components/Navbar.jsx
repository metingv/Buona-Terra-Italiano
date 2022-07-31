import '../styles/Component.scss';
import { useEffect, useState  } from 'react';
import Audio from "./Audio"
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  ) 
  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])
  return (
    <>

    <div className="Navbar">
      <img src={"../imgs/loqo.png"} alt="loqo"></img>
    { !matches  && (
        <ul>
        <li>
         <a href>
         About
         </a>
        </li>
        <li>
        <a href>
         Menu
         </a>
        </li>
        <li>
        <a href>
        Gallery
        </a>
        </li>
        <li>
        <a href> 
         Accolades
         </a>
        </li>
        <li>
        <a href>
         Contact
         </a>
        </li>
    </ul>
    )    
    }
    { matches  && (
     <>
     <MobileNavbar />
     </>
    )    
    }
        
        <figure>
        <Audio />
       <button>Reservation</button>
       </figure>
    </div>
    </>
  
    
  );
}

export default Navbar;
