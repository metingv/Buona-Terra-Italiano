import img1 from "../imgs/menu-img1.jpg"
import img2 from "../imgs/menu-img2.jpg"
import img3 from "../imgs/menu-img3.jpg"
import { HashLink } from 'react-router-hash-link';

export default function Component3() {
    return (
        <>
            <div className=" Globalcss  GlobalComponent  Component3" >
                <h1>DISCOVER MENU</h1>
                <p>Steeped in strong Italian roots, our desire is to bring you through a journey of new tastes combining traditional ingredients <br />
                    with creative and modern culinary techniques.</p>
                    <figure>
                    <img src={img1}  alt="" />
                    <img src={img2}  alt="" />
                    <img src={img3}  alt="" />
                    </figure>
              <HashLink to="/blog#">  <button>View Blog</button> </HashLink>
            </div>
        </>
    );
}
