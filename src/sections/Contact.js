import React, { useState } from "react";
import { send } from "emailjs-com";
import {
	ContactStyles,
	FormContainer,
	Icons,
	IconContainer,
	TextContainer,
	Label,
	Container,
} from "../Styles/Sections/ContactStyles";
import { Icon } from "@iconify/react";
import Title from "../Components/Title";

function Contact() {
	const [toSend, setToSend] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});

	const handleChange = (e) => {
		setToSend({
			...toSend,
			[e.target.name]: e.target.value,
		});
	};

	const resetForm = () => {
		setToSend({
			user_name: "",
			user_email: "",
			message: "",
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		send(
			"service_1gaftse",
			"contact_form",
			toSend,
			"user_08idYLJZO7AtHuPUQ55EA"
		)
			.then((res) => {
				console.log("Success!", res.status, res.text, res);
				alert("Your message was sent successfully!");
			})
			.catch((err) => {
				console.log("Failed...", err);
			});

		resetForm();
	};

	return (
		<ContactStyles id="contact">
			<div className="title-container">
				<Title title="	Get in touch"></Title>
				<p>
					Interested in discussing an idea or have a question? <br />
					Shoot me a message and I’ll get back to you as soon as possible.
				</p>
			</div>
			<Container>
				<FormContainer>
					<form onSubmit={onSubmit}>
						<TextContainer className="text-inputs">
							<Label>
								<input
									required
									type="text"
									name="user_name"
									placeholder="NAME"
									value={toSend.user_name}
									onChange={handleChange}
								/>
							</Label>
							<Label>
								<input
									required
									type="text"
									name="user_email"
									placeholder="EMAIL"
									value={toSend.user_email}
									onChange={handleChange}
								/>
							</Label>
						</TextContainer>
						<div className="textarea">
							<textarea
								required
								name="message"
								placeholder="MESSAGE"
								value={toSend.message}
								onChange={handleChange}
							></textarea>
						</div>
						<div className="button-container">
							<button type="submit">Send</button>
						</div>
					</form>
				</FormContainer>
				<Icons>
					<IconContainer>
						<Icon className="icon" icon="fontisto:email" width={25} />
						<p> tereafranxman97@gmail.com </p>
					</IconContainer>
					<IconContainer>
						<Icon className="icon" icon="akar-icons:location" width={25} />
						<p> Minnesota, U.S.A. </p>
					</IconContainer>
					<IconContainer>
						<Icon className="icon" icon="bi:phone" width={25} />
						<p>507.686.0322</p>
					</IconContainer>
				</Icons>
			</Container>
		</ContactStyles>
	);
}

export default Contact;
