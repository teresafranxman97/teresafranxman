import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link className="item" to="/projects">PROJECTS</Link>
            <Link className="item" to="/skills">SKILLS</Link>
            <Link className="item" to="/contact">CONTACT</Link>
        </nav>
    );
}

export default Navbar;