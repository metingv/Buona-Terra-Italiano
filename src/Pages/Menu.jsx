/* eslint-disable */
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import menu1 from '../docs/menu.pdf' 
import menu2 from '../docs/menu2.pdf' 
import menu3 from '../docs/menu3.pdf' 
function Menu() {
    return (
        <>
            <div className="Menu">
                <header>
                    <Navbar />
                </header>
                <div className="GlobalComponent1 Component1a" >
                    <figure id="ourmenu">
                        <h1>CLICK FOR MENU</h1>
                        <p><a href={menu1} target="_blank" >LUNCH</a></p>
                        <p><a href={menu2} target="_blank" >DINNER</a></p>
                        <p><a href={menu3} target="_blank" >WINE LIST</a></p>
                    </figure>
                </div>
                <section className="Globalcss GlobalComponent">
                    <h1>CUISINE</h1>
                    <p>Buona Terra serves contemporary Italian cuisine shaped by the personal vision of Chef Denis Lucchi. It starts with a ‘gourmet larder’ assembled from all the places in Italy where Chef Denis knows the best producers and their foodstuffs are located. These prized artisanal ingredients and the Italian recipes Chef Denis grew up with are the jump-off points for culinary artistry and adventure. Because of these, Chef Denis creates reinterpretations with more complex and intense flavours than the traditional dish, presenting them individually in contrast to the typically shared platters.</p>
                    <p>There is a sense of challenge and pushing the envelope; of new discovery. Yet in the soul, Buona Terra is nothing but Italian – proudly, quintessentially, sublimely.</p>
                    <h1 className="nobefore" >“Buon Appetito”</h1>
                    <p>– From all of us at Buona Terra</p>
                </section>
                <div className="GlobalComponent1 Component2a" >
                    <figure id="lunchmenu">
                        <h1>LUNCH MENU</h1>
                        <h2>BUONA TERRA <br /> SET MENU</h2>
                        <p>4 COURSE &emsp; $118 <br /><br />
                            2 GLASS WINE PAIRING &emsp;  $58 PER PERSON <br />
                            3 GLASS WINE PAIRING &emsp;  $88 PER PERSON</p>
                        <span>OPTION OF NATURAL WINE AVAILABLE</span>
                        <h2 className="h22">BUONA TERRA <br />  LUNCH EXPERIENCE</h2>
                        <p>5 COURSE &emsp; FROM $178 <br /> <br />
                            LUNCH EXPERIENCE WINE PAIRING <br /> FROM $168 PER PERSON</p>
                        <span>MENU WILL CHANGE BASED OF SEASONAL AND  AVAILABLE DAILY  INGREDIENTS, AND IS CONSIDERED FOR ALL TABLE</span>
                        <button><a href={menu1} target="_blank" >VIEW LUNCH MENU</a></button>
                        <span>Prices are subject to service charge & prevailing government taxes</span>
                    </figure>
                </div>
                <div className="GlobalComponent1 Component3a" >
                    <figure id="dinnermenu">
                        <h1>DINNER MENU</h1>
                        <h2>LEAVE IT TO CHEF LUCCHI   <br /> BUONA TERRA EXPERIENCE</h2>
                        <p>5 COURSE ONWARDS &emsp; FROM $228</p>
                        <span>MENU WILL CHANGE BASED OF SEASONAL AND AVAILABLE DAILY INGREDIENTS, AND IS CONSIDERED FOR ALL TABLE</span>
                        <p>WINE PAIRING FROM $168 PER PERSON <br />
                            <span>OPTION OF NATURAL WINE AVAILABLE</span>
                            <br />
                            WHISKY FLYER 1960/70/80/90 <br /> FROM $398 PER PERSON</p>
                        <button><a href={menu2} target="_blank" >VIEW DINNER MENU</a></button>
                        <span>Prices are subject to service charge & prevailing government taxes</span>
                    </figure>
                </div>
                <section className="Globalcss GlobalComponent">
                    <h1>WINE MENU</h1>
                    <p>For the perfect gastronomic experience, let our sommelier recommend the perfect wine to pair
                        your meal with from our wide selection.</p>
                    <h1 className="nobefore" >“Buon Appetito”</h1>
                    <p>– From all of us at Buona Terra</p>
                </section>
                <div className="GlobalComponent1 Component4a" >
                    <figure id="winemenu">
                        <h1>CARTA DEI VINI</h1>
                        <p>Italy’s wines are among the most distinctive and best-loved in the world. Buona Terra boasts a collection of over 250 labels including vintages and limited bottles that are rarely available commercially, earning the restaurant recognition among the 5 top wine lists for Italian wines in Singapore.<br /><br />

                            Buona Terra is one of the very few restaurants in Singapore to offer wine pairing for the entire menu, with the sommelier proposing ‘a la minute’ pairings based on the guest’s food selections.<br /><br />

                            At Buona Terra, product passion combines with expert curation and cheerful sharing to make wine-drinking an act of sheer enjoyment.

                        </p>
                        <button><a href={menu3} target="_blank" >view wine menu</a></button>
                    </figure>
                </div>


            </div>
            <Footer />
        </>
    );
}

export default Menu;
