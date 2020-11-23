import React from "react";

import classes from "./SaveChangePanelButton.module.css";

function SaveChangePanelButton(props) {
  return <button onClick={() => props.clicked()} className={classes.saveButton}>{props.text}</button>;
}

export default SaveChangePanelButton;
