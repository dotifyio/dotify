import React from "react";

import classes from './SeeWorkButton.module.scss'
import Arrow from '../../assets/Union 2.png'

function SeeWorkButton(props) {
  const handleScrollToElement = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={classes.seeWorkButton} style={{ paddingLeft: props.left }} onClick={() => handleScrollToElement(props.elementRef)}>
      {props.value}{" "}
      <span className={classes.arrowIcon}>
        <img src={Arrow} style={{ marginBottom: "3px" }} />
      </span>
    </button>
  );
}

export default SeeWorkButton;
