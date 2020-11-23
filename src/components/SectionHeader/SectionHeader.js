import React from "react";

import classes from "./SectionHeader.module.css";

function SectionHeader(props) {
  return (
    <div className={classes.container}>
      <p
        className={classes.aboveTitle}
        style={{ backgroundColor: props.bgColor, color: props.color }}
      >
        {props.aboveTitle}
      </p>
      <p className={classes.title}>
        {props.title}
        <span style={{ color: props.color, position: "relative" }}>.</span>
      </p>
      <p className={classes.subTitle}>{props.subTitle}</p>
    </div>
  );
}

export default SectionHeader;
