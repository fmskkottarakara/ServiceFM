import Navbar1 from "../Navbar1";
import Hero from "../Hero";
import travelImg from "../../images/welding-photo1.jpg";
import Footer from "../Footer";
import AboutUs from "../AboutUs";


function About () {
    return (
        <>
        <Navbar1/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="About"
         btnClass="hide"
         />
         <AboutUs/>
        </>
        
    )


}

export default About;