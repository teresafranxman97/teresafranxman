import React, { useState } from "react";
import { send, init } from 'emailjs-com';

function Contact() {
    const [ toSend, setToSend ] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        setToSend({
            ...toSend, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
           <div className="form-container"> 
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        name="user_name"
                        placeholder="NAME"
                        value={toSend.user_name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="user_email"
                        placeholder="EMAIL"
                        value={toSend.user_email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="MESSAGE..."
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div> 
        </div>
    );
}

export default Contact;