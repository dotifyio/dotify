import React from "react";
import { Link } from 'react-router-dom'

import classes from "./NeedUs.module.scss";
import Arrow from "../../assets/Union 2.png";
import Circle from "../../assets/Inner-Page.svg";
import Dots from "../../assets/Home-01.svg";
import Dots2 from "../../assets/Home-02.svg";
import Elipse from "../../assets/Inner-Page3.svg";

function NeedUs(props) {
  
  const handleScrollToElement = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.container}>
      <img src={Circle} className={classes.circle} />
      <img src={Dots} className={classes.dots} />
      <img src={Dots2} className={classes.dots2} />
      <img src={Elipse} className={classes.elipse} />
      <div className={classes.needUsHolder}>
        <p className={classes.aboveTitle}>lets work together</p>
        <p className={classes.title}>Need a successful project?</p>
        {props.isOnHomePage ? (
          <button className={classes.seeWorkButton} onClick={() => handleScrollToElement(props.contactRef)}>
            Contact Us{" "}
            <span className={classes.arrowIcon}>
              <img src={Arrow} style={{ marginBottom: "3px" }} />
            </span>
          </button>
        ) : (
          <Link to="/contact">
            <button className={classes.seeWorkButton}>
              Contact Us{" "}
              <span className={classes.arrowIcon}>
                <img src={Arrow} style={{ marginBottom: "3px" }} />
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NeedUs;
