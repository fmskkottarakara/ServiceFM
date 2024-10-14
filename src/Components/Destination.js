import roofing1 from '../images/roofing1.jpg';
import roofing3 from '../images/roofing3.jpg';
import grill1 from '../images/grillwork1.jpg';
import grill2 from '../images/grillwork2.jpg';
import staircase1 from '../images/staircase1.jpg';
import staircase2 from '../images/staircase2.jpg';
import kitchen1 from '../images/kitchen1.jpg';
import kitchen2 from '../images/kitchen2.jpg';
import maintenance1 from '../images/maintenance1.jpg';
import maintenance2 from '../images/maintenance2.jpg';
import cupboard1 from '../images/cupboard1.jpg';
import cupboard2 from '../images/cupboard2.jpg';
import solar1 from '../images/solar1.jpg';
import solar2 from '../images/solar2.jpg';
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Our Services!</h1>
            
            <DestinationData
            className="first-des"
            heading = "Roofing Work"
            text={`
                We are committed to using only the highest quality materials to ensure durability and longevity in every roofing project. We take pride in our craftsmanship, ensuring that every installation is completed to the highest standards.
                
            `}
            img1 = {roofing1}
            img2 = {roofing3}
            />

            <DestinationData
            className="first-des-reverse"
            heading = "Grill Work"
            text = "We understand that a grill is more than just a cooking appliance; it’s a centerpiece for gatherings and outdoor dining experiences. That's why we offer a wide range of grill options, including built-in grills, portable models, and custom designs tailored to fit your space and style. Our grill work is crafted with the highest quality materials, ensuring durability and performance for years to come."
            img1 = {grill1}
            img2 = {grill2}
            />

            

            

            <DestinationData
            className="first-des"
            heading = "Modular Kitchen Work"
            text = "We are committed to using only the highest quality materials in our modular kitchen installations. From durable cabinets to elegant countertops, every element is chosen for its aesthetic appeal and longevity. Our expert craftsmen ensure that every installation is executed with precision, guaranteeing a flawless finish."
            img1 = {kitchen1}
            img2 = {kitchen2}
            />

            <DestinationData
            className="first-des-reverse"
            heading = "Maintenance Work"
            text = "With FM Services, you can trust that your property is in capable hands. Our commitment to quality, reliability, and customer satisfaction sets us apart. Let us handle the maintenance work while you focus on what matters most."
            img1 = {maintenance1}
            img2 = {maintenance2}
            />

            <DestinationData
            className="first-des"
            heading = "Cupboard Work"
            text = "Our skilled craftsmen handle every aspect of the installation process, ensuring that your cupboards are fitted with precision and care. We also offer a range of finishing options, including paints, stains, and hardware, allowing you to customize your cupboards to your liking."
            img1 = {cupboard1}
            img2 = {cupboard2}
            />
            
            <DestinationData
            className="first-des-reverse"
            heading = "Solar Structural Work"
            text = "By choosing [Your Company Name] for your solar structural work, you’re not only investing in your property but also contributing to a greener planet. Our goal is to provide high-quality solar solutions that empower you to take control of your energy consumption while reducing your carbon footprint.
Contact us today to learn more about our solar structural services and how we can help you transition to renewable energy!"
            img1 = {solar1}
            img2 = {solar2}
            />

            <DestinationData
            className="first-des"
            heading = "Stair Case"
            text = "Our skilled craftsmen specialize in a variety of staircase styles, including traditional, modern, and custom designs tailored to your specifications. We use only the highest quality materials to ensure durability and a flawless finish, whether you’re looking for wooden, metal, or glass staircases."
            img1 = {staircase1}
            img2 = {staircase2}
            />
        </div>

    )
}

export default Destination