import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/projects">Projects</Link>
            <Link className="item" to="/skills">Skills</Link>
            <Link className="item" to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;