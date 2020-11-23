import React, { useEffect } from "react";

import classes from "./Contact.module.scss";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import NeedUs from "../../components/NeedUs/NeedUs";
import Footer from "../../components/Footer/Footer";
import Dots2 from "../../assets/Home-02.svg";
import Elipse from "../../assets/Inner-Page3.svg";

function Contact() {

  useEffect(() => {
    document.title = 'Contact - Dotify';
  }, [])

  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.contactSection}>
        <div className={classes.contactWrapper}>
          <SectionHeader
            aboveTitle="send us a message"
            title="Contact Us"
            subTitle="Our great team is always ready to help. Send us an email or fill out the form and we will make sure to contact you back."
            color="#702FFF"
            bgColor="#c8b0ff"
          />

          <div className={classes.contactHolder}>
            <img src={Dots2} className={classes.dots} />
            <img src={Elipse} className={classes.elipse} />
            <ContactForm />
            <div className={classes.support}>
              <div className={classes.supportCard}>
                <p className={classes.title}>Email</p>
                <p className={classes.supportText}>Our support team will get back to in 48-h during standard business hours.</p>
                <p className={classes.email}><a href="https://dotify.desky.support/">support@dotify.io</a></p>
              </div>
              <div className={classes.supportCard}>
                <p className={classes.title}>Ticket Support</p>
                <p className={classes.supportText}>Our support team will get back to in 48-h during standard business hours.</p>
                <p className={classes.email}><a href="https://dotify.desky.support/">Submit a Ticket</a></p>
              </div>
            </div>
          </div>
        </div>

        <NeedUs />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
