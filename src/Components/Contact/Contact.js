import React, { useState } from "react";
import { send } from "emailjs-com";

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
		<div>
			<div className="form-container">
				<form onSubmit={onSubmit}>
                    <label>Name</label>
					<input
						required
						type="text"
						name="user_name"
						placeholder="NAME"
						value={toSend.user_name}
						onChange={handleChange}
					/>
                    <label>Email</label>
					<input
						required
						type="text"
						name="user_email"
						placeholder="EMAIL"
						value={toSend.user_email}
						onChange={handleChange}
					/>
                    <label>Message</label>
					<textarea
                        required
                        name="message"
                        value={toSend.message}
                        onChange={handleChange}
                    ></textarea>

					<div className="button-container">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
