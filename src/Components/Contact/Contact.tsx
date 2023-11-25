import React, { useRef, FormEvent } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_hj1kym4', 'template_zqjbjjp', form.current, 'LFixhZ-sn2ep7uqtS')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });

      if (form.current) {
        form.current.reset();
      }
    } else {
      console.error("Form is not available.");
    }
  };

  return (
    <section id="Contact">
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>quangthangduongt@gmail.com</h5>
            <a href="mailto:quangthangduongt@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <AiOutlineMessage className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Quang Thang</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100047907622203"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>quangthang_26</h5>
            <a href="https://www.instagram.com/quangthang_26/" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;