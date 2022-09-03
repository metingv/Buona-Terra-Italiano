/* eslint-disable */
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import { Markup } from "interweave"
import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer'
import { Helmet } from 'react-helmet';

function PrivacyPolicy() {


    return (
        <div className="PrivacyPolicy" >
            <Helmet>
                <title>Cookies Policy</title>
                <meta name="description" content="Cookies Policy" />
                <meta name="theme-color" content="#008f68" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8308453477166056"
                    crossorigin="anonymous"></script>
            </Helmet>
            <header>
                <Navbar />
            </header>
            <section className='Globalcss GlobalComponent'  >
                <h1>Cookies Policy</h1>
                <p>
                   <strong> What are cookies?</strong><br />
                    Almost all websites use cookies. A cookie is a small file that saves Internet settings. You download the browser during the first access on the website. The next time the user returns to the site using the same device, the browser checks for a cookie correlated (ie containing the name of the site) and uses the data within the cookie to be sent back to the site. This allows sites to recognize the browser and, in some circumstances, to vary the contents shown depending on the case.
                  <br />  <br />
                  <strong>  The advantages of cookies</strong><br />
                    Some cookies are extremely useful because they can make browsing more enjoyable for you when you visit a website already consulted other times. If you use the same device and the same browser, the cookie can, for example, remembering your preferences, help us understand how to use our site and make content appear more relevant to the interests and needs of the user. None of the cookies used on our site collects information that personally identifies you.
                    <br />  <br />
                    <strong>  Check and delete cookies</strong><br />
                    Users can choose to accept or decline cookies. This choice is possible by setting or changing the browser you control to accept or decline cookies. The procedure is differentiated depending on the browser used by you, for more information please consult the browser’s Help.
                    <br />  <br />
                    Our website uses or may use, in combination with each other, technical cookies (managed by the owner and / or manager of the site) and third-party cookies (arranged and managed by foreign managers to the site), divided according to the classification proposal in Opinion 04/2012 on the exemption from the consent to the use of cookies issued by the Working Group pursuant to art. 29 within the EU
                    <br />  <br />
                    <strong>   – Analitycs</strong><br />
                    Cookies are used to collect and analyze statistical information on accesses and website visits. In some cases, combined with other information such as the entered credentials for access to restricted areas (your email address and password), you can be used to profile the user (personal habits, sites visited, downloaded content, types interactions carried out, etc.).
                    <br />  <br />
                    <strong>   – Widgets</strong><br />
                    Fall into this category all those graphical components of a interface of a program, that has the purpose to facilitate the user interaction with the program itself. By way of example are widgets cookies Facebook, Google, Twitter, Pinterest. More information about privacy and their use are available directly on the websites of the respective operators.
                </p>

            </section>

            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
