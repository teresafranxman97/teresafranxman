import React, { useState } from "react";
import { send, init } from 'emailjs-com';

function Contact() {
    const [ toSend, setToSet ] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
           <div className="form-container"> 
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        name="user_name"
                        placeholder="NAME"
                    />
                    <input
                        type="text"
                        name="user_email"
                        placeholder="EMAIL"
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="MESSAGE..."
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