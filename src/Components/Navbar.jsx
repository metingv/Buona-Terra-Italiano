/* eslint-disable */
import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MobileNavbar from './MobileNavbar';
import img from "../imgs/loqo.png"

function Navbar() {

  const [menu] = useState([
    {
      id: "1",
      name: "About",
      link: "/about"
    },
    {
      id: "2",
      name: "Menu",
      link: "/menu"
    },
    {
      id: "3",
      name: "Gallery",
      link: "/gallery"
    },
    {
      id: "4",
      name: "Blog",
      link: "/blog"
    },
    {
      id: "5",
      name: "Accolades",
      link: "/accolades"
    },
    {
      id: "6",
      name: "Contact",
      link: "/contact"
    }
  ])

  return (
    <>

      <div className="Navbar">
        <Link to="/"> <img src={img} alt="loqo"></img>   </Link>

          <ul>
            {
              menu.map((menu) => {
                return (<li key={menu.id} >
                       <Link to={menu.link}><a href="true">{menu.name}</a></Link>
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
     
      
            <MobileNavbar />
   
        <figure>
          <Link to="/reservation"><button>Reservation</button></Link>
        </figure>
      </div>
    </>


  );
}

export default Navbar;
