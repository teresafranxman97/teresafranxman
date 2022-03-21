import React from "react";
import {
	Container,
	Content,
	ContentContainer,
} from "../Styles/Sections/ServicesStyles";
import { Icon } from "@iconify/react";
import Title from "../Components/Title";
import ContactMe from "../Components/ContactMe";

const Services = () => {
	return (
		<Container id="services">
			<div className="header">
				<Title title="Services I Offer"></Title>
				<p>
					As an enthusiastic developer I’m always ready to jump onto the next
					project and offer a variety of services in design, to development as
					well as deployment of web applications.{" "}
				</p>
			</div>
			<ContentContainer>
				<Content>
					<Icon className="icon" icon="ic:twotone-design-services" />
					<h3>UI/UX Design</h3>
					<p>
						I aim to design products that keep focus on the user in order to
						create the best possible experiences.{" "}
					</p>
				</Content>
				<Content>
					<Icon className="icon" icon="ic:baseline-developer-mode" />
					<h3>Front End Development</h3>
					<p>
						Utilizing various tools and techniques I develop accessible,
						responsive and visually appealing user interfaces.
					</p>
				</Content>
				<Content>
					<Icon className="icon" icon="bxs:data" />
					<h3>Back End Development</h3>
					<p>
						I am knowledgable in server-side development and comfortable working
						with databases.
					</p>
				</Content>
				<Content>
					<Icon className="icon" icon="akar-icons:search" />
					<h3>User Research</h3>
					<p>
						I prioritize understanding the user, and product to be designed
						through extensive research.
					</p>
				</Content>
			</ContentContainer>
			<ContactMe />
		</Container>
	);
};

export default Services;
