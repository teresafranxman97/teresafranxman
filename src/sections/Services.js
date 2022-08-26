import React from "react";
import {
	Container,
	Content,
	ContentContainer,
} from "../Styles/Sections/ServicesStyles";
import { Icon } from "@iconify/react";
import Title from "../Components/Title";

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
			</ContentContainer>
		</Container>
	);
};

export default Services;
