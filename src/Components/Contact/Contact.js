import React, { useState } from "react";
import { send, init } from 'emailjs-com';

function Contact() {
    const [ toSend, setToSet ] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    return (
        <div>
           <div className="form-container"> 
                <form>
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
                </form>
            </div> 
        </div>
    );
}

export default Contact;