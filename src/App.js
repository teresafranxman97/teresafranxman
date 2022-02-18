import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Navbar from "./Components/Navbar";
import AppStyles from "./Styles/app-styles";
import Skills from './sections/Skills.js';
import data from "./DataFiles/data";

function App() {
	const [projects] = useState(data);

	return (
		<AppStyles>
			<div className="app-container">
				<Navbar />

				<Routes>
					<Route exact path="/teresafranxman" element={<Landing />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects projects={projects} />} />
					<Route path="/tools" element={<Tools />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</AppStyles>
	);
}

export default App;
