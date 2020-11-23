import React from "react";

import classes from './PanelHeader.module.css'

function PanelHeader(props) {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.line}></div>
    </div>
  );
}

export default PanelHeader;
