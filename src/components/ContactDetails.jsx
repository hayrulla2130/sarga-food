import React from "react";

function ContactDetails() {
    return <div className="contact_container">
        <div className="contact_text">
            <span className="title">We’d love to hear from you.</span>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            <p className="mail_phone">example@mail.com <br /> (545) 545 45 45</p>
        </div>
        <div className="contact_inputs">
            <div>Name (required)</div>
            <div className="names">
                <div>First Name <input type="text"></input></div>
                <div>Last Name <input type="text" value></input></div>
            </div>
            <div>Email (required) <input type="text" value></input></div>
            <div>Message (required) <input type="text" value></input></div>
            <div><button type="submit">Send</button></div>
        </div>
    </div>
}

export default ContactDetails;