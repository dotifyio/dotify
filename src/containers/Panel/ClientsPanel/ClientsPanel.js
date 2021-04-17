import React, { useState, useEffect } from "react";
import { storage } from "../../../firebase";

import PanelHeader from "../../../components/PanelHeader/PanelHeader";
import AddButtonPanel from "../../../elements/AddButtonPanel/AddButtonPanel";
import SaveChangePanelButton from "../../../elements/SaveChangePanelButton/SaveChangePanelButton";
import classes from "./ClientsPanel.module.scss";
import Axios from "axios";

function ClientsPanel() {
  const [addingClient, setAddingClient] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [buildWith, setBuildWith] = useState("");
  const [image, setImage] = useState(null);
  const [themes, setThemes] = useState({});
  const [scripts, setScripts] = useState({});
  const [clients, setClients] = useState({});

  useEffect(() => {
    if (Object.values(themes).length === 0) {
      getThemes();
    }

    if (Object.values(scripts).length === 0) {
      getScripts();
    }

    if (Object.values(clients).length === 0) {
      getClients();
    }
  }, []);

  const getClients = () => {
    Axios.get("https://dotify-9c677.firebaseio.com/clients.json")
      .then((res) => {
        if (res.data) {
          setClients(res.data);
        }
      })
      .catch((err) => {});
  };

  const getScripts = () => {
    Axios.get("https://dotify-9c677.firebaseio.com/scripts.json")
      .then((res) => {
        if (res.data) {
          setScripts(res.data);
        }
      })
      .catch((err) => {});
  };

  const getThemes = () => {
    Axios.get("https://dotify-9c677.firebaseio.com/themes.json")
      .then((res) => {
        if (res.data) {
          setThemes(res.data);
        }
      })
      .catch((err) => {});
  };

  const addClientHandler = () => {
    setAddingClient(true);
  };

  const addedNewClientHandler = () => {

    if (name && link && buildWith && image) {
      const uploadTask = storage.ref(`clientsImages/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
        },
        () => {
          storage
            .ref("clientsImages")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              Axios.post("https://dotify-9c677.firebaseio.com/clients.json", {
                name: name,
                link: link,
                buildWith: buildWith,
                image: url,
              });
            });
            setAddingClient(false)
        }
      );
    }
  };

  return (
    <div>
      {!addingClient ? (
        <div className={classes.ourClients}>
          <div className={classes.headerHolder}>
            <PanelHeader title="Our clients:" />
            <AddButtonPanel
              text="Add new client"
              clicked={() => addClientHandler()}
            />
          </div>
          <div className={classes.clientsHolder}>
            <table className={classes.table} cellSpacing="0">
              <thead className={classes.headerRow}>
                <tr>
                  <th className={classes.theader}>Client Name</th>
                  <th className={classes.theader}>Client Link</th>
                  <th className={classes.theader}>Script or theme used</th>
                  <th className={classes.theader}>Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(clients).length > 0
                  ? Object.values(clients).map((client) => (
                      <tr key={client.name}>
                        <td className={classes.bdata}>{client.name}</td>
                        <td className={classes.bdata}>{client.link}</td>
                        <td className={classes.bdata}>{client.buildWith}</td>
                        <td className={classes.bdata}>Edit</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={classes.addClientContainer}>
          <PanelHeader title="Add new client:" />
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
              <div className={classes.selectHolder}>
                <p>Build With:</p>
                <select
                  className={classes.select}
                  onChange={(e) => setBuildWith(e.target.value)}
                >
                  {Object.values(themes).length > 0
                    ? Object.values(themes).map((theme) => (
                        <option key={theme.name}>{theme.name}</option>
                      ))
                    : null}
                  {Object.values(scripts).length > 0
                    ? Object.values(scripts).map((script) => (
                        <option key={script.name}>{script.name}</option>
                      ))
                    : null}
                </select>
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
              {image ? <p>{image.name}</p> : null}
            </div>
          </div>
          <div className={classes.hrLine}></div>
          <SaveChangePanelButton
            text="Add new client"
            clicked={addedNewClientHandler}
          />
        </div>
      )}
    </div>
  );
}

export default ClientsPanel;
