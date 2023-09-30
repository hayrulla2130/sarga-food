import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return <div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home isOpen={isOpen}/>} />
                    <Route path="/about" element={<About isOpen={isOpen} />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
        <Footer isOpen={isOpen} />
    </div>
}

export default App;