import { useState ,useEffect } from 'react'
import { Link } from "react-router-dom";
import  axios  from "axios"
import { Markup } from "interweave"
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'

function Blog() {
    const [news,setNews] = useState([]);
    useEffect(() => {
        getNews();
        console.log(news)
    }, []);

    function getNews() {
        axios.get('http://localhost/www.buonaterraitaliona.com/api/').then(response => {
            setNews(response.data);
        });
    }
    return (
        <div className='Blog'>
            <header>
                    <Navbar />
            </header>
       <section>
       <h1>Buona Terra Italiano <br />Blog</h1> 

       <div className='items' >

         {
            news.map((data) => {
                return(
                       <Link to={`/blogcontent/${data.id}/news`}>  
                       <div key={data.id} className='item'>
                       <img src={data.img} alt={data.alt}   />
                        <span className="dataheader">{data.header} <br />{data.header1}</span>
                        <div className='content'>
                        <Markup content={data.content} />
                        </div>
                        </div>
                        </Link>
                
                )
            })
        }
  

       </div>
       
       </section>

       <Footer />
        </div>
    );
}

export default Blog;
