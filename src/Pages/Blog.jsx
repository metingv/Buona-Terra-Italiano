/* eslint-disable */
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import { Markup } from "interweave"
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';

function Blog() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        getNews();
        console.log(news)
    }, []);

    function getNews() {
        axios.get('http://localhost/www.buonaterraitaliano.com/api/').then(response => {
            setNews(response.data);
        });
    }
    return (
        <div className='Blog'>
            <Helmet>    
                    <title>Italian Cuisine Blog</title>
                    <meta name="description" content="Italian Cuisine" />
                    <meta name="theme-color" content="#008f68" />
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8308453477166056"
                        crossorigin="anonymous"></script>               
            </Helmet>
            <header>
                <Navbar />
            </header>
            <section>
                <h1>Buona Terra Italiano <br />Blog</h1>
                <div className='items' >
                    {
                        news.map((data) => {
                            return (
                                <Link key={data.id} to={`/blogcontent/${data.header1}/${data.id}/news`}>
                                    <div  className='item'>
                                        <img src={data.img} alt={data.alt} />
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
