import React from "react";
import "./Contact.css";
import email_icon from "../assets/email-icon.png";
import phone_icon from "../assets/phone_icon.png";
import mail_icon from "../assets/mail_icon.png";
import address_icon from "../assets/address_icon.png";


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dabc2386-d90f-4cea-a9b0-f7eb1bf074df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }};

  return (
    
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={email_icon} />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} />
            businesshandle618@gmail.com
          </li>
          <li>
            <img src={phone_icon} />
            +91 77270-77033
          </li>
          <li>
            <img src={address_icon} />
            Bh-4, The Lnm institute of information technology, Rupa ki Nangal,
            via Jamdoli, Jaipur, Rajasthan, India.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M20 12L4 12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
