import React, { useState, useRef } from "react";
import axios from 'axios'
import * as emailjs from 'emailjs-com'

import classes from "./ContactForm.module.scss";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [idea, setIdea] = useState("");

  const inputRef = useRef()

  const [emailSent, setEmailSent] = useState(false)

  const handleSumbit = async (e) => {

    var frm = document.getElementsByName('contact-form')[0];
    e.preventDefault();
    frm.reset()
    
    setEmailSent(true)

    emailjs.sendForm("gmail", "dotify", "#contact_form", "user_6jn0UmovlTmwdCmxOlxQ4")
    
    // const form = await axios.post('/api/form', {
    //   name,
    //   email,
    //   company,
    //   phone,
    //   idea
    // }).then(res => {
    //   console.log(res);
    // })
    
    setName("")
    setPhone("");
    setIdea("");
    setEmail("");
    setCompany("");
    
    inputRef.current.value = ""
    
    setEmailSent(true)
  }
  
  return (
    <div className={classes.formHolder}>
        <div className={classes.formContainer}>
          <p className={classes.formTitle}>Let us know about your project</p>
          <form name="contact-form" autoComplete="off" className={classes.form} onSubmit={(e) => handleSumbit(e)} id="contact_form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              name="Name"
              required
              ref={inputRef}
              onChange={(e) => setName(e.target.value)}
              className={classes.formInput}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="user_email"
              required
              ref={inputRef}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.formInput}
            />
            <input
              type="text"
              placeholder="Company"
              value={company}
              name="Company"
              ref={inputRef}
              required
              onChange={(e) => setCompany(e.target.value)}
              className={classes.formInput}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              ref={inputRef}
              name="Phone"
              required
              onChange={(e) => setPhone(e.target.value)}
              className={classes.formInput}
            />
            <textarea
              type="text"
              placeholder="What is your idea about"
              value={idea}
              name="Idea"
              ref={inputRef}
              required
              onChange={(e) => setIdea(e.target.value)}
              className={classes.formInput}
            />
            <button
              type="submit"
              value="CONTACT US"
              className={classes.submitButton}
            >
              CONTACT US
            </button>
            { emailSent ? <p style={{ marginTop: "15px", color: "#000248" }}>Email sent.</p> : null }
          </form>
        </div>
      </div>
  );
}

export default ContactForm;
