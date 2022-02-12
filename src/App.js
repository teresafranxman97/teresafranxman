import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/landingPage/LandingPage";
import Projects from "./Components/Projects/Projects";
import Tools from "./Components/Tools/Tools";
import Contact from "./Components/contact/Contact";
import Navbar from "./Components/navbar/Navbar";
import AppStyles from "./Styles/app-styles";
import Repairs from "./Components/underRepairs/Repairs";
import Skills from './Components/skills/Skills.js';
import data from "./data";

function App() {
	const [projects] = useState(data);

	return (
		<AppStyles>
			<div className="app-container">
				<Navbar />

				<Routes>
					<Route exact path="/teresafranxman" element={<LandingPage />} />
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
