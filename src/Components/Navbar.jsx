/* eslint-disable */
import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
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
                          <li><HashLink to="/menu/#ourmenu">OUR MENU</HashLink></li>
                          <li><HashLink to="/menu/#lunchmenu">LUNCH MENU</HashLink></li>
                          <li><HashLink to="/menu/#dinnermenu">DINNER MENU</HashLink></li>
                          <li><HashLink to="/menu/#winemenu" className='noborder'>WINE MENU</HashLink></li>
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
          <button><Link to="/reservation">Reservation</Link></button>
        </figure>
      </div>
    </>


  );
}

export default Navbar;
