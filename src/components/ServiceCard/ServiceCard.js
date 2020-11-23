import React from "react";

import classes from "./ServiceCard.module.scss";

function ServiceCard(props) {
  return (
    <div className={classes.container}>
      <div style={{ backgroundColor: props.color }} className={classes.iconHolder}>
        <img src={props.img} />
      </div>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.subiTitle}>
        {props.subTitle}
      </p>
    </div>
  );
}

export default ServiceCard;
