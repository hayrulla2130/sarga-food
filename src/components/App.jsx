import React, {useState} from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Form from "./Form";
import Footer from "./Footer";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return <div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Body isOpen={isOpen} />
        <Form />
        <Footer />
    </div>
}

export default App;