import React from "react";

import classes from "./MovementCard.module.scss";

function MovementCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.imageHolder}>
        <img src={props.img} />
      </div>
      <p className={classes.stats}>{props.stats}</p>
      <p className={classes.title}>{props.title}</p>
    </div>
  );
}

export default MovementCard;
