import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.scss'




const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_i8fotl2", "template_exrqpga", form.current, "v-5eWRlzHw6yxxlG9")
      // emailjs.send("service_i8fotl2","template_exrqpga");
      .then((result) => {
        alert("Success, your email has been sent")
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" required/>
        <label>Email</label>
        <input type="email" name="email_id" required/>
        <label>Message</label>
        <input type='textarea' name="message" required/>
        <input type="submit" value="Send" />
      </form>
  );
};

export default Contacts;