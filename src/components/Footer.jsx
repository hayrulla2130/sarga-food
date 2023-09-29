import React from "react";

function Footer(isOpen) {
    return <section id="footer">
        <div className="footer_container" style={{display: isOpen ? 'none' : ''}}>
            <div className="links">
                <ul className="socials">
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
                <div className="footer_copyright">
                    Made by <a href="#">abispa</a>
                </div>
            </div>
        </div>
    </section>
}

export default Footer;