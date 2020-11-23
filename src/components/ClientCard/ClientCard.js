import React from "react";

import classes from "./ClientCard.module.scss";
import { Link } from "react-router-dom";

function ClientCard(props) {
  const colors = ["#702FFF", "#FFCB5D", "#000248"];
  const rotate = ["0deg", "195deg", "160deg"];

  const randonNumber = () => {
    return Math.floor(Math.random() * (2 - 0 + 1));
  }

  return (
    <div className={classes.container}>
      <a href={props.link}>
        <div className={classes.imageHolder}>
          <img src={props.img} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 324.753 229.37"
            className={classes.svgShape}
            style={{ transform: `rotate(${rotate[randonNumber()]})` }}
          >
            <path
              d="M11.825,68.225C-13.706,112.5,4.973,174.267,40.49,209.992c18.349,18.347,43.058,21.173,67.6,19.189,15.908-1.03,27.751-6.051,40.087-16.676,8.98-8.041,16.666-14.463,28.67-18.019,16.955-4.856,33.98-2.29,49.72,5.228,11.5,5.4,22.686,11.2,36.119,10.825,48.049-.159,83.867-73.808,46.6-108.968-19.869-18.913-46.47-32.651-73.413-32.64-21.505-.188-32.7-6-46.73-21.491C175.025,31.218,163.7,13.936,142.77,5.518,124.08-2.417,58.209-12.17,11.825,68.225"
              transform="translate(0 -0.353)"
              fill={colors[randonNumber()]}
              fillRule="evenodd"
              className={classes.shape}
            />
          </svg>
        </div>
      </a>
      <div className={classes.clientInfo}>
        <p className={classes.clientTitle}>{props.client}</p>
        <p className={classes.buildWith}>Build with {props.buildWith}</p>
      </div>
    </div>
  );
}

export default ClientCard;
