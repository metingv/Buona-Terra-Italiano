import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import Tabs from "../Components/Tab/Tabs";

function Reservation() {
    return (
        <>
            <div className="Reservation">
                <header>
                    <Navbar />
                </header>
                <section className="Globalcss GlobalComponent">
                    <h1>Reservation</h1>
                    <div className="figure">
                        <img src="../imgs/reservationimg.jpg" alt="" />
                        <div className="box">
                            <div className="header">
                                <img className="headerimg" alt="" src="https://static.chope.co/uploads/2018/03/Buona_Terra_Widget_Logo_jpg_1521547887.jpg?version=170859" />
                                 <div>
                                <div className="title1">Buona Terra <br /><br /></div>
                                <div className="title2">Mon-Fri: 12-3pm (Last Order: 2pm), 6:30-10:30pm (Last Order: 9:15pm)
                                Sat: 6:30-10:30pm (Last Order: 9:15pm)
                                Closed Sunday & PH
                                </div>
                                </div>
                            </div>
                            <Tabs />
                            <div className="footer">
                                Singapore restaurant reservations powered by Chope <br />
                                © 2022 Chope, All rights reserved. Terms and Conditions
                            </div>
                          
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Reservation;
