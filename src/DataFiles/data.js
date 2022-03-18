import clone from "../images/googleclone.png";
import underdogdevs from "../images/underdogdevs.png";
import logo from "../images/Original on Transparent.png";

const data = [
	{
		id: 0,
		src: `${clone}`,
		title: "Google Clone",
		position: "Front End Developer",
		description:
			"With the power of HTML and CSS, I created a functional clone of Googles very own search, image search and advanced search webpages.  This site allows for simple to advanced searches that contain specific filters.",
		stack: "CSS, HTML, JavaScript",
		site: "https://teresafranxman97.github.io/google-clone.github.io/",
		githubLink: "https://teresafranxman97.github.io/google-clone.github.io/",
	},
	{
		id: 1,
		src: `${underdogdevs}`,
		title: "Underdog Devs",
		position: "UI/UX Engineer",
		description:
			"A web app that was developed to help aspiring developers of disadvantaged backgrounds make their transition into the tech field. Underdog Devs provides a 'go at your own pace' program that connects future devs(mentees) with industry experts (mentors) where they can learn the skills required to become a successful developer.",
		stack: "React, Ant Design, Node.Js, Heroku, Okta",
		site: "",
		githubLink: "https://github.com/BloomTech-Labs/underdog-devs-fe-a",
	},
	{
		id: 2,
		src: `${logo}`,
		title: "Personal Portfolio",
		position: "Front End Developer",
		description:
			"Designed in figma then brought to life with React and Styled Components, my personal portfolio website is a fully front end application developed to showcase my skills as well as my knowledge of web design and development. ",
		stack: "React, Styled-Components, Netlify, Github Pages",
		site: "https://teresafranxman.com/",
		githubLink: "https://github.com/teresafranxman97/teresafranxman",
	},
];

export default data;
