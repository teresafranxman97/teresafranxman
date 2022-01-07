import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    return (
        <div>
            <h1>Hi</h1>
            <h1>I AM TERESA</h1>
            <h1>UI/UX DESIGNER <span> & </span> <br/> FRONTEND DEVELOPER</h1>
            <Link to="/projects"><button>Projects</button></Link>
        </div>
    );
};

export default LandingPage;