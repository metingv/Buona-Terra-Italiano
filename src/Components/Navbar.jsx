import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import Audio from "./Audio"
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  )
  const [menu] = useState([
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Menu",
      link: "/menu"
    },
    {
      name: "Gallery",
      link: "/gallery"
    },
    {
      name: "Accolades",
      link: "/accolades"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ])
  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])
  return (
    <>

      <div className="Navbar">
        <Link to="/"> <img src={"../imgs/loqo.png"} alt="loqo"></img>   </Link>
        {!matches && (
          <ul>
            {
              menu.map((menu) => {
                return (<li>
                       <Link to={menu.link}><a href>{menu.name}</a></Link>
                        <ul className="submenu">
                          <li><a>OUR MENU </a></li>
                          <li><a>LUNCH MENU </a></li>
                          <li><a>DINNER MENU </a></li>
                          <li><a className='noborder'>WINE MENU </a></li>
                        </ul>
                </li>)
              })
            }
          </ul>
        )
        }
        {matches && (
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
