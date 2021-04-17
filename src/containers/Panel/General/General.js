import React, { useState, useEffect } from 'react'
import axios from 'axios'

import classes from './General.module.scss'
import PanelHeader from '../../../components/PanelHeader/PanelHeader'
import SaveChangePanelButton from '../../../elements/SaveChangePanelButton/SaveChangePanelButton'

function General() {
  const [release, setRelease] = useState("")
  const [itemName, setItemName] = useState("")
  const [link, setLink] = useState("")
  const [saved, setSaved] = useState(false)

  const submitChangesHandler = () => {

    axios.put("https://dotify-9c677.firebaseio.com/specialItem.json", { name: itemName, link: link, release: release } )
      .then(res => setSaved(true))
      .catch(err => {})
  }

  return (
    <div className={classes.container}>
      <div className={classes.generalHolder}>
        <PanelHeader title="Update &quot;New&quot; notification section:" />
        <div className={classes.formHolder}>
          <div className={classes.inputSection}>
            <p>Select the button:</p>
            <button style={{ backgroundColor: release === "NEW" ? "#702FFF" : "#FAFAFB" }} className={classes.selectButton} onClick={(e) => setRelease(e.target.innerHTML)}>NEW</button>
            <button style={{ backgroundColor: release === "UPDATED" ? "#702FFF" : "#FAFAFB" }} className={classes.selectButton} onClick={(e) => setRelease(e.target.innerHTML)}>UPDATED</button>
          </div>
          <div className={classes.inputSection}>
            <p>Add the text:</p>
            <input placeholder="Item Name" className={classes.input} onChange={(e) => setItemName(e.target.value)} />
          </div>
          <div className={classes.inputSection}>
            <p>Select the button:</p>
            <input placeholder="Item Link" className={classes.input} onChange={(e) => setLink(e.target.value)} />
          </div>
        </div>
        <div className={classes.hrLine}></div>
        <SaveChangePanelButton text="Save Changes" clicked={submitChangesHandler} />
        { saved ? <p>Saved.</p> : null }
      </div>
    </div>
  )
}

export default General
