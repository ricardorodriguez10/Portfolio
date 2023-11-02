import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
            <h2>
           <span> Contact me </span>
           </h2>
           <p>Feel free to contact me by submitting the form below and I will get back to you as soon as possible</p>

           <div className="contact-form-container">
           <form action="#" className="" method="post">
            <div className="contact-form-field">
                <label className="" form="name">Name</label>
                <input className="" placeholder="Enter your Name" type="text" name="name" id="name" ></input>
            </div>
            <div className="contact-form-field">
                <label className="" form="email">Email</label>
                <input className="" placeholder="Enter your Email" type="email" name="name" id="email" ></input>
            </div>
            <div className="contact-form-field">
                <label className="" form="message">Message</label>
                <textarea cols="30" rows="10" className="" placeholder="Enter your Message" name="message" id="message" ></textarea>
            </div>

            <button type="submit" className="">Submit</button>


           </form>

           </div>
            

            </div>
        </section>
    )
}

export default Contact;