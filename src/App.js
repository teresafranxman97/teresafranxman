import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Projects from "./Components/Projects/Projects";
import Tools from "./Components/Tools/Tools";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import AppStyles from "./Styles/app-styles";
import Repairs from "./Components/UnderRepairs/Repairs";

import data from "./data";

function App() {
	const [projects] = useState(data);

	return (
		<AppStyles>
			<div className="app-container">
				<Navbar />

				<Routes>
					<Route exact path="/teresafranxman" element={<LandingPage />} />
					<Route path="/projects" element={<Projects projects={projects} />} />
					<Route path="/tools" element={<Tools />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</AppStyles>
	);
}

export default App;
