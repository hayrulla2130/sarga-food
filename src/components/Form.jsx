import React from "react";

function Form() {
    return <section>
        <div className="form_container">
            <div className="title">Subscribe to our newsletter.</div>
            <div className="subtitle">Sign up with your email address to receive news and updates.</div>
            <div className="inform">
                <input type="text" placeholder="Email Adress" />
                <button>Sign Up</button>
            </div>
        </div>
    </section>
}

export default Form;