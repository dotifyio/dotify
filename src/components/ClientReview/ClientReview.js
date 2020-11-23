import React from "react";

import classes from "./ClientReview.module.scss";
import Author from "../../assets/author.png";

function ClientReview() {
  return (
    <div className={classes.unfocusedReview}>
      <div className={classes.author}>
        <div>
          <img src={Author} />
          <div style={{ textAlign: "left" }}>
            <p className={classes.authorName}>RDbrain</p>
            <p className={classes.scriptType}>On InstaSave</p>
          </div>
        </div>
        <div style={{ display: "flex", marginRight: "20px" }}>
          <div className={classes.lines}></div>
          <div className={classes.lines}></div>
        </div>
      </div>
      <div className={classes.comment}>
        I actually wanted to choose many options on why I gave 5 stars but could
        only get to design quality. I won't be fair if I neglect customer
        support, Documentation quality, customization etc. I really want to
        thank you guys for giving me exactly what I want for my project where am
        working.
      </div>
    </div>
  );
}

export default ClientReview;
