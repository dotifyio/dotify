import React, { useState, useEffect } from 'react'
import { storage } from '../../../firebase'
import Axios from 'axios'

import classes from './ScriptsPanel.module.scss'
import PanelWorkCard from '../../../components/PanelWorkCard/PanelWorkCard'
import PanelHeader from '../../../components/PanelHeader/PanelHeader'
import AddButtonPanel from '../../../elements/AddButtonPanel/AddButtonPanel'
import SaveChangePanelButton from '../../../elements/SaveChangePanelButton/SaveChangePanelButton'


function ScriptsPanel() {
  const [addingScript, setAddingScript] = useState(false)
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [scripts, setScripts] = useState({})

  useEffect(() => {
    if(Object.keys(scripts).length === 0) {
      getScripts();
    }
  }, [])

  const addScriptHandler = () => {
    setAddingScript(true)
  }

  const addedNewScriptHandler = () => {
    setAddingScript(false)

    if(name && link && label && price && image) {
      const uploadTask = storage.ref(`scriptsImages/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
        },
        () => {
          storage
            .ref("scriptsImages")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              Axios.post("https://dotify-9c677.firebaseio.com/scripts.json", {
                name: name,
                link: link,
                label: label,
                price: price,
                image: url,
              });
            });
        }
      );
    }
  }

  const getScripts = async () => {
    await Axios.get("https://dotify-9c677.firebaseio.com/scripts.json")
      .then(res => {
        if (res.data) {
          setScripts(res.data)
        }
      })
      .catch(err => {})

  }

  return (
    <div>
      {!addingScript ? (
        <div className={classes.ourScripts}>
          <div className={classes.headerHolder}>
            <PanelHeader title="Add new script:" />
            <AddButtonPanel text="Add new script" clicked={() => addScriptHandler()} />
          </div>
          <div className={classes.scriptsHolder}> 
            { Object.values(scripts).length > 0 ? Object.values(scripts).map(script => (
              <PanelWorkCard key={script.name} title={script.label} image={script.image} />
            )) : null}
          </div>
        </div>
      ) : (
        <div className={classes.addScriptContainer}>
          <PanelHeader title="Add new script:" />
          <div className={classes.formHolder}>
            <div className={classes.form}>
              <div className={classes.inputHolder}> 
                <p>Name:</p>
                <input placeholder="Item name" className={classes.input} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={classes.inputHolder}> 
                <p>Link:</p>
                <input placeholder="Item name" className={classes.input} onChange={(e) => setLink(e.target.value)} />
              </div>
              <div className={classes.inputHolder}> 
                <p>Label:</p>
                <input placeholder="Item name" className={classes.input} onChange={(e) => setLabel(e.target.value)} />
              </div>
              <div className={classes.inputHolder}> 
                <p>Price:</p>
                <input placeholder="Item name" className={classes.priceInput} onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>
            <div className={classes.dropHolder}>
              <p>Upload an image:</p>
              <label className={classes.dropBox}>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                Select image
              </label>
              { image ? <p>{image.name}</p> : null }
            </div>
          </div>
          <div className={classes.hrLine}></div>
          <SaveChangePanelButton text="Add new script" clicked={() => addedNewScriptHandler()} />
        </div>
      )}
    </div>
  )
}

export default ScriptsPanel
