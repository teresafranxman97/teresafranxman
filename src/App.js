import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./sections/Landing";
import Navbar from "./Components/Navbar";
import AppStyles from "./Styles/app-styles";
import GlobalStyles from "./Styles/globalStyles";

function App() {
	return (
		<AppStyles>
			<GlobalStyles/>
			<Navbar />	

			<Routes>
				<Route exact path="/" element={<Landing />} />
			</Routes>
		</AppStyles>
	);
}

export default App;
