import React from 'react'

import classes from './AddButtonPanel.module.css'

function AddButtonPanel(props) {
  return (
    <button className={classes.addButton} onClick={() => props.clicked()}>
      {props.text}
    </button>
  )
}

export default AddButtonPanel
