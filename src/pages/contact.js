import React from "react";
import ContactDetails from "../components/ContactDetails";

function Contact({isOpen}){
    return <div>
        <ContactDetails isOpen={isOpen}/>
    </div>
}

export default Contact;