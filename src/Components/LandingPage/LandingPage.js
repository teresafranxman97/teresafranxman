import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    return (
        <div>
            <h1>Hi.</h1>
            <h2>I AM TERESA.</h2>
            <h2>UI/UX DESIGNER AND FRONTEND DEVELOPER</h2>
            <Link to="/projects"><button>Projects</button></Link>
        </div>
    );
};

export default LandingPage;