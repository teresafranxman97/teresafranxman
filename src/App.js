import React from "react";
import Landing from "./sections/Landing";
import Navbar from "./Components/Navbar";
import AppStyles from "./Styles/app-styles";
import GlobalStyles from "./Styles/globalStyles";

function App() {
	return (
		<AppStyles>
			<GlobalStyles />
			<Navbar />

			<Landing />
		</AppStyles>
	);
}

export default App;
