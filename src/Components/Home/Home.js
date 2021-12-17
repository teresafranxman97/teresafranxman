import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1>HELLO.</h1>
            <h2>I AM TERESA, A UI/UX DESIGNER AND FRONTEND DEVELOPER</h2>
            <Link to="/projects"><button>Projects</button></Link>
        </div>
    );
};

export default Home;