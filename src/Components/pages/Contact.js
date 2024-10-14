import Navbar1 from "../Navbar1";
import Hero from "../Hero";
import travelImg from "../../images/img-1.jpg";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function Contact () {
    return (
        <>
        <Navbar1/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="Contact"
         btnClass="hide"
         />
         <ContactForm/>
        </>
    )


}

export default Contact;