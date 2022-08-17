import { useState ,useEffect} from 'react'
import { useParams } from "react-router-dom";
import  axios  from "axios"
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import { Markup } from "interweave"

function BlogContent() {
    const [info, setInfo] = useState({});

    let { id } = useParams();
     
      useEffect(() => {
        getInfo();
        console.log(id)
    }, []);

    function getInfo() {
        axios.get(`http://localhost/www.buonaterraitaliona.com/api/${id}`).then(function(response) {
            console.log(response.data);
            setInfo(response.data);
        });
    }
    
return (
        <div className="BlogContent">
            <header>
                <Navbar />
            </header>
       <section>
         <h1>
            {info.header} <br />
            {info.header1}
         </h1>
         <img src={info.img}  alt={info.alt} />
         <span> <Markup content={info.content} /></span>
         
       </section>

       <Footer />
        </div>
    );
}

export default BlogContent;
