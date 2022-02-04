import React, { useState } from "react";
import { send } from "emailjs-com";
import { ContactStyles, Container, ContentContainer, Icons, Label ,Footer } from '../../Styles/Contact/ContactStyles';
import { Icon } from "@iconify/react";

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
		})
	}

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
				alert("Your message was sent successfully!")
			})
			.catch((err) => {
				console.log("Failed...", err);
			});

		resetForm()
	};

	return (
		<ContactStyles>
			<ContentContainer>
				<p> I would love to hear from you! <br/> Send me a message or connect with me online. </p>
				<Icons>
					<Icon className="icon" icon="codicon:github-alt" width={20} />
					<Icon className="icon" icon="akar-icons:linkedin-fill" width={20} />
				</Icons>
			</ContentContainer>
			<Container className="form-container">
				<form onSubmit={onSubmit}>
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
					<div className="textarea"> 
						<label>Message</label>
						<textarea
							required
							name="message"
							value={toSend.message}
							onChange={handleChange}
						></textarea>
					</div>
					<div className="button-container">
						<button type="submit">Submit</button>
					</div>
				</form>
			</Container>
			<Footer>
				@ Teresa Franxman 2022
			</Footer>
		</ContactStyles>
	);
}

export default Contact;
