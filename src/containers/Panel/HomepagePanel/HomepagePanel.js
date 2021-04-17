import React, { useState } from "react";

import classes from "./HomepagePanel.module.scss";
import PanelHeader from "../../../components/PanelHeader/PanelHeader";
import SaveChangePanelButton from "../../../elements/SaveChangePanelButton/SaveChangePanelButton";
import Axios from "axios";

function HomepagePanel() {
  const [years, setYears] = useState("")
  const [clients, setClients] = useState("")
  const [scripts, setScripts] = useState("")
  const [themes, setThemes] = useState("")

  const saveMovementsHandlers = () => {
    Axios.put("https://dotify-9c677.firebaseio.com/movement.json", { clients: clients, scripts: scripts, themes: themes, yearsOfExperience: years })
      .then(res => {})
      .catch(err => {})
  }

  return (
    <div>
      <div className={classes.homePanelHolder}>
        <div className={classes.formWrapper}>
          <PanelHeader title='Select three items - our projects:' />
          <div className={classes.formHolder}>
            <div className={classes.selectHolder}>
              <p>Select the item:</p>
              <select className={classes.select}>
                <option>InstaSave</option>
                <option>InstaSave</option>
              </select>
            </div>
            <div className={classes.selectHolder}>
              <p>Select the item:</p>
              <select className={classes.select}>
                <option>InstaSave</option>
                <option>InstaSave</option>
              </select>
            </div>
            <div className={classes.selectHolder}>
              <p>Select the item:</p>
              <select className={classes.select}>
                <option>InstaSave</option>
                <option>InstaSave</option>
              </select>
            </div>
          </div>
          <div className={classes.hrLine}></div>
          <SaveChangePanelButton text="Save Changes" clicked={() => {}} />
        </div>
        <div className={classes.formWrapper}>
          <PanelHeader title='Our Movement settings:' />
          <div className={classes.formHolder}>
            <div className={classes.inputHolder}>
              <p>Years of experience:</p>
              <input className={classes.input} placeholder="Enter value" onChange={(e) => setYears(e.target.value)} />
            </div>
          </div>
          <div className={classes.formHolder}>
            <div className={classes.inputHolder}>
              <p>Happy clients and counting:</p>
              <input className={classes.input} placeholder="Enter value" onChange={(e) => setClients(e.target.value)} />
            </div>
          </div>
          <div className={classes.formHolder}>
            <div className={classes.inputHolder}>
              <p>Plugins and Scripts:</p>
              <input className={classes.input} placeholder="Enter value" onChange={(e) => setScripts(e.target.value)} />
            </div>
          </div>
          <div className={classes.formHolder}>
            <div className={classes.inputHolder}>
              <p>WordPress and HTML Themes:</p>
              <input className={classes.input} placeholder="Enter value" onChange={(e) => setThemes(e.target.value)} />
            </div>
          </div>
          <div className={classes.hrLine}></div>
          <SaveChangePanelButton text="Save Changes" clicked={saveMovementsHandlers} />
        </div>
      </div>
    </div>
  );
}

export default HomepagePanel;
