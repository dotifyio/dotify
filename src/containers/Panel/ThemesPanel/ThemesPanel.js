import React, { useState, useEffect } from "react";
import { storage } from "../../../firebase";

import classes from "./ThemesPanel.module.scss";
import PanelWorkCard from "../../../components/PanelWorkCard/PanelWorkCard";
import PanelHeader from "../../../components/PanelHeader/PanelHeader";
import AddButtonPanel from "../../../elements/AddButtonPanel/AddButtonPanel";
import SaveChangePanelButton from "../../../elements/SaveChangePanelButton/SaveChangePanelButton";
import Axios from "axios";

function ThemesPanel() {
  const [addingTheme, setAddingTheme] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [themes, setThemes] = useState({})

  useEffect(() => {
    if(Object.keys(themes).length === 0) {
      getThemes();
    }
  }, [themes])

  const addThemeHandler = () => {
    setAddingTheme(true);
  };

  const addedNewThemeHandler = () => {
    setAddingTheme(false);

    if(name && link && label && price && image) {
      const uploadTask = storage.ref(`themesImages/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
        },
        () => {
          storage
            .ref("themesImages")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              Axios.post("https://dotify-9c677.firebaseio.com/themes.json", {
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
  };

  const getThemes = async () => {
    await Axios.get("https://dotify-9c677.firebaseio.com/themes.json")
      .then(res => {
        if (res.data) {
          setThemes(res.data)
        }
      })
      .catch(err => {})
  }

  return (
    <div>
      {!addingTheme ? (
        <div className={classes.outThemes}>
          <div className={classes.headerHolder}>
            <PanelHeader title="Our themes:" />
            <AddButtonPanel
              text="Add new theme"
              clicked={() => addThemeHandler()}
            />
          </div>
          <div className={classes.themesHolder}>
            { Object.values(themes).length > 0 ? Object.values(themes).map(theme => (
              <PanelWorkCard key={theme.name} title={theme.label} image={theme.image} />
            )) : null}
          </div>
        </div>
      ) : (
        <div className={classes.addThemeContainer}>
          <PanelHeader title="Add new theme:" />
          <div className={classes.formHolder}>
            <div className={classes.form}>
              <div className={classes.inputHolder}>
                <p>Name:</p>
                <input
                  placeholder="Item name"
                  className={classes.input}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={classes.inputHolder}>
                <p>Link:</p>
                <input
                  placeholder="Item name"
                  className={classes.input}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />
              </div>
              <div className={classes.inputHolder}>
                <p>Label:</p>
                <input
                  placeholder="Item name"
                  className={classes.input}
                  onChange={(e) => setLabel(e.target.value)}
                  required
                />
              </div>
              <div className={classes.inputHolder}>
                <p>Price:</p>
                <input
                  placeholder="Item name"
                  className={classes.priceInput}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
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
          <SaveChangePanelButton
            text="Add new theme"
            clicked={addedNewThemeHandler}
          />
        </div>
      )}
    </div>
  );
}

export default ThemesPanel;
