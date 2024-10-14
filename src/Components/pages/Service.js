import Navbar1 from "../Navbar1";
import Hero from "../Hero";
import travelImg from "../../images/services.jpg";
import Footer from "../Footer";
import Cards from "../Cards";
import Destination from "../Destination";

function Service () {
    return (
        <>
        <Navbar1/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="Service"
         btnClass="hide"
         />
         <Destination />
         <Cards/>
        </>
    )


}

export default Service;