import React, { useState } from "react";

import classes from "./WorkCard.module.scss";
import Image from "../../assets/Image.png";
import { Link } from "react-router-dom";

function WorkCard(props) {
  const [imgHover, setImgHover] = useState(false);

  const toggle = () => {
    console.log("heelloo");
    setImgHover(true);
  };

  return (
    <div className={classes.container}>
      <a href={props.link}>
        <div
          className={classes.imageHolder}
          onMouseOver={toggle}
          onMouseOut={() => setImgHover(false)}
        >
          <img src={props.image} className={classes.workImage} />
          <div
            className={classes.imageBorder}
            style={{ border: imgHover ? "5px solid black" : "5px solid white" }}
          ></div>
        </div>
      </a>
      <div className={classes.infoHolder}>
        <div>
          <p className={classes.workTitle}>{props.name}</p>
          <p className={classes.workType}>{props.label}</p>
        </div>
        <div className={classes.price}>${props.price}</div>
      </div>
    </div>
  );
}

export default WorkCard;
