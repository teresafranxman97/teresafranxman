import clone from "../images/googleclone.png";
import underdogdevs from "../images/underdogdevs.png";

const data = [
	{
		id: 0,
		src: `${clone}`,
		title: "Google Clone",
		position: "Front End Developer",
		description:
			"With the power of HTML and CSS, I created a functional clone of Googles very own search, image search and advanced search webpages.  This site allows for simple to advanced searches that contain specific filters.",
		href: "https://teresafranxman97.github.io/google-clone.github.io/",
		stack: "CSS, HTML, JavaScript",
	},
	{
		id: 1,
		src: `${underdogdevs}`,
		title: "Underdog Devs",
		position: "UI/UX Engineer",
		description:
			"As a lead UI/UX Engineer I conducted research pertaining to the users experience. Following the completetion of my research, I created wireframes for every necessary page of the application. Finally, utilzing Ant Design, we built the necessary components and styled them.",
		href: "",
		stack: "React, Ant Design, Node.Js, Heroku, Okta",
	},
	{
		id: 2,
		src: `${underdogdevs}`,
		title: "Personal Portfolio",
		position: "Front End Developer",
		description: "I created my personal portfolio completely from scratch",
		href: "/",
		stack: "React, Styled-Components, Netlify, Github Pages",
	},
];

export default data;
