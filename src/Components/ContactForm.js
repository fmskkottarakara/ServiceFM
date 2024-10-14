import "./ContactFormStyles.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm () {
    const notify = () => toast.success('🦄 Email Sent!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c3564fc6-bec0-440f-98f7-09ff402104ca");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    
  

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={onSubmit}>
        <input type="text" name="name"  placeholder="Name" required/>
        <input type="email" name="email"  placeholder="Email" required/>
        <textarea name="message"  placeholder="Type a Message" required></textarea>
        <button onClick={notify} type="submit">Submit Form</button>
        <ToastContainer />
      </form>
        </div>
        

    ) 
}

export default ContactForm;