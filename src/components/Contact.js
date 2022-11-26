import React, { useRef } from "react";
import emailjs from "@emailjs/browser"
import "../styles/Contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const btnText = document.querySelector(".contact_form_button_text");
        disableSendBtn();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            (result) => {
                btnText.textContent = "Thank you for your message!"

            }, (error) => {
                btnText.textContent = "There was an error sending your message. Please refresh the page and try again."
            }
        )
    }

    const disableSendBtn = () => {
        const button = document.querySelector('.formSubmit')
        const buttonSpan = document.querySelector('.contact_form_button_text')

        button.disabled = true
        button.style.cursor = 'default'
        buttonSpan.textContent = 'Sending...'
    }

    return (
        <div className="contactContainer"  id="section3">
            <h2 className="sectionHeader"><span>03.</span>Contact</h2>
            <p className="contactInfo">I am currently not looking for an opportunity, but if you have a question or just want to chat, feel free to send me a message and I will get back to you!</p>
            <div className="formContainer">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="formName" id="name" placeholder="Name" aria-label="Enter your name" name="userName" required></input>

                    <input type="email" className="formEmail" id="email" placeholder="Email" aria-label="Enter your email address" name="userEmail" required></input>

                    <textarea placeholder="Message" className="formMessage" rows="5" name="userMessage" required></textarea>

                    <button type="submit" className="formSubmit">
                        <div className='link' data-link-alt='Send'>
                            <span className='contact_form_button_text'>Send</span>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;