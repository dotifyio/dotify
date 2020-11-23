import React from "react";

import classes from "./Footer.module.css";
import socialMedia from "../../assets/Icon awesome-twitter.svg";
import socialMedia2 from "../../assets/Icon awesome-instagram.svg";
import socialMedia3 from "../../assets/Icon awesome-linkedin-in.svg";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.footerHolder}>
        <p className={classes.title}>dotify</p>
        <p className={classes.about}>
          Dotify Creative, web freaks who loves solving web problems using the
          most modern technologies. We create beautiful Wordpress and HTML
          themes. We develop different platforms in different categories that
          actually make sense.
        </p>

        <div className={classes.socialHolder}>
          <div className={classes.icon}>f</div>
          <div className={classes.icon}>
            <img src={socialMedia} />
          </div>
          <div className={classes.icon}>
            <img src={socialMedia2} />
          </div>
          <div className={classes.icon}>
            <img src={socialMedia3} />
          </div>
        </div>

        <p className={classes.copyright}>© Copyright 2020 Dotify</p>
      </div>
    </div>
  );
}

export default Footer;
