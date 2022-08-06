import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
function About() {
    return (
        <>
            <div className="About">
                <header>
                <Navbar />
                </header>
                <section className="Globalcss GlobalComponent">
                    <h1>ABOUT</h1>
                    <figure>
                        <img src="../imgs/aboutimg.jpg" />
                    <p>Housed in a cosy extended wing of Chateau Tcc, Buona Terra’s boutique ambience weaves a spell of charming intimacy. The interior’s understated sophistication evokes the history-steeped, colonial beauty of the main Black-and-White bungalow — yet remains fetchingly casual. Guests amble pass a wall of gleaming, glass wine cabinets before entering a dining space of contemporary elegance. Bright, quirky paintings on the wall catch the eye and herald the bold, innovative cuisine soon to be enjoyed.</p>
                    </figure>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default About;
