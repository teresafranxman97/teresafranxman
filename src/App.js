import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Navbar from "./Components/Navbar";
import AppStyles from "./Styles/app-styles";
import Services from './sections/Services.js';
import About from "./sections/About";

function App() {
	return (
		<AppStyles>
			<Navbar />	

			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="services" element={<Services />} />
				<Route path="tools" element={<Tools />} />
				<Route path="projects" element={<Projects />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</AppStyles>
	);
}

export default App;
