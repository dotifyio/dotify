import React from 'react'

import classes from './PanelWorkCard.module.css'

function PanelWorkCard(props) {
  return (
    <div className={classes.container}>
      <img src={props.image} />
      <p>{props.title}</p>
    </div>
  )
}

export default PanelWorkCard
