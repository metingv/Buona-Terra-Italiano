import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
function Sended() {
    return (
        <>
            <div className="Sended">
                <header>
                    <Navbar />
                <div className="th">
                    Thank you for your message. It has been sent.
                </div>
                </header>        
                <Footer />
            </div>
        </>
    );
}

export default Sended;
