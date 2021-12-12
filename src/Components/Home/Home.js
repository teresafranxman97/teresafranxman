import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1>Hello,</h1>
            <h2>I am Teresa, a UI/UX Designer and Frontend Developer</h2>
            <Link to="/projects"><button>Projects</button></Link>
        </div>
    );
};

export default Home;