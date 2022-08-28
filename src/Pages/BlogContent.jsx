/* eslint-disable */
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import { Markup } from "interweave"
import { Helmet } from 'react-helmet';

function BlogContent() {
    const [info, setInfo] = useState({});

    let { header1 , id  } = useParams();

    useEffect(() => {
        getInfo();
    }, []);

    function getInfo() {
        axios.get(`http://localhost/www.buonaterraitaliano.com/api/${header1}/${id}`).then(function (response) {
            console.log(response.data);
            setInfo(response.data);
        });
    }

    return (
        <div className="BlogContent">
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
                <h1>
                    {info.header} <br />
                    {info.header1}
                </h1>
                <img src={info.img} alt={info.alt} />
                <span> <Markup content={info.content} /></span>

            </section>

            <Footer />
        </div>
    );
}

export default BlogContent;
