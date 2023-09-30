import React from "react";

function ContactDetails({isOpen}) {
    return <div className="contact_container" style={{display: isOpen ? 'none' : 'flex'}}>
        <div className="contact_text">
            <span className="title">We’d love to hear from you.</span>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            <p className="mail_phone">example@mail.com <br /> (545) 545 45 45</p>
        </div>
        <div className="contact_inputs">
            <div>Name (required)</div>
            <div>First Name <input className="" type="text"></input></div>
            <div>Last Name <input className="" type="text"></input></div>
            <div>Email (required) <input className="" type="text"></input></div>
            <div>Message (required) <textarea rows="3" class="message"></textarea> </div>
            <button className="contact_button" type="submit">Send</button>
        </div>
    </div>
}

export default ContactDetails;