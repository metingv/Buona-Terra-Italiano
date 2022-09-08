import img from "../imgs/star.png"
import { HashLink } from 'react-router-hash-link';
export default function Component1() {
    return (
        <>
            <div className=" Globalcss  GlobalComponent Component1" >
                <h1>ABOUT BUONA TERRA</h1>
                <img src={img}  alt=""/>
                <p>Buona Terra means ‘Good Earth’ in Italian. Buona Terra is an ode to the Italian love affair with food and dining … perhaps the only way to dine! With the whole of Italy as his inspiration and larder, Chef Denis Lucchi personally handpicks the finest produce of its soil. Then, brilliantly reinventing tradition, he transforms these luscious ingredients into contemporary works of art. Buona Terra is Italian food-craft at its most thoughtful and original and gastronomically refined. It is also a return to cherished basics: the conscious, unhurried enjoyment of flavours; the hospitality that makes you feel right at home; and the enduring memories that come from a truly great meal and a special experience.
                Italian cuisine  is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity, and later spread around the world together with waves of Italian diaspora.Significant changes occurred with the colonization of the Americas and the introduction of potatoes, tomatoes, capsicums, maize and sugar beet — the latter introduced in quantity in the 18th century.It is one of the best known and most appreciated gastronomies worldwide.
<br /><br />
Italian cuisine includes deeply rooted traditions common to the whole country, as well as all the regional gastronomies, different from each other, especially between the north, the centre and the south of Italy, which are in continuous exchange.Many dishes that were once regional have proliferated with variations throughout the country.Italian cuisine offers an abundance of taste, and is one of the most popular and copied around the world.The cuisine has influenced several other cuisines around the world, chiefly that of the United States.
<br /><br />
One of the main characteristics of Italian cuisine is its simplicity, with many dishes made up of few ingredients, and therefore Italian cooks often rely on the quality of the ingredients, rather than the complexity of preparation. Italian cuisine is at the origin of a turnover of more than €200 billion worldwide. The most popular dishes and recipes, over the centuries, have often been created by ordinary people more so than by chefs, which is why many Italian recipes are suitable for home and daily cooking, respecting regional specificities, privileging only raw materials and ingredients from the region of origin of the dish and preserving its seasonality.
<br /><br />
The Mediterranean diet forms the basis of Italian cuisine, rich in pasta, fish, fruits and vegetables.Cheese, cold cuts and wine are central to Italian cuisine, and along with pizza and coffee (especially espresso) form part of Italian gastronomic culture.Desserts have a long tradition of merging local flavours such as citrus fruits, pistachio and almonds with sweet cheeses like mascarpone and ricotta or exotic tastes as cocoa, vanilla and cinnamon. Gelato, and cassata are among the most famous examples of Italian desserts, cakes and patisserie. Italian cuisine relies heavily on traditional products; the country has a large number of traditional specialities protected under EU law. Italy is the world's largest producer of wine, as well as the country with the widest variety of indigenous grapevine varieties in the world.
                </p>
                < HashLink to="/about#"><button>Read More</button></ HashLink>
            </div>
        </>
    );
}
