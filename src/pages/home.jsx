import React from "react";
import Body from '../components/Body';
import Form from "../components/Form";

function Home({ isOpen }) {

    return <div>
        <Body isOpen={isOpen} />
        <Form isOpen={isOpen} />
    </div>
}

export default Home;