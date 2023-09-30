import React, { useState, useEffect } from "react";

function Navbar({ isOpen, setIsOpen }) {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible, setVisible]);

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;

        setVisible(
            prevScrollPos > currentScrollPos || currentScrollPos < 10
        );

        setPrevScrollPos(currentScrollPos);
    }

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return <header>
    <div className={`navbar ${visible ? '' : 'navbar-hidden'}`}>
        <div className="logo"><a href="/">Sarga Food</a></div>
        <ul className="links">
            <li><a href="/home">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <ul className="socials">
            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
        <div className="toggle_btn" onClick={toggleDropdown}>
            <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
    </div>
    <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
        <ul></ul>
        <ul className="links">
            <li><a href="/home">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <ul className="socials">
            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
    </div>
</header>
}

export default Navbar;