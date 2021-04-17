import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { storage } from '../../../firebase' 

import PanelHeader from "../../../components/PanelHeader/PanelHeader";
import AddButtonPanel from "../../../elements/AddButtonPanel/AddButtonPanel";
import SaveChangePanelButton from "../../../elements/SaveChangePanelButton/SaveChangePanelButton";
import classes from "./TestimonialsPanel.module.scss";

function TestimonialsPanel() {
  const [addingReview, setAddingReview] = useState(false);
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [scripts, setScripts] = useState({});
  const [themes, setThemes] = useState({});
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    if (Object.values(themes).length === 0) {
      getThemes();
    }

    if (Object.values(scripts).length === 0) {
      getScripts();
    }

    if (Object.values(reviews).length === 0) {
      getReviews();
    }
  }, [])

  const addReviewHandler = () => {
    setAddingReview(true);
  };

  const addedNewReviewHandler = () => {

    if (name && product && comment && image) {
      const uploadTask = storage.ref(`reviewsImages/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
        },
        () => {
          storage
            .ref("reviewsImages")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              Axios.post("https://dotify-9c677.firebaseio.com/reviews.json", {
                name: name,
                product: product,
                comment: comment,
                image: url,
              });
            });
          setAddingReview(false)
        }
      );
    }
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

  const getReviews = () => {
    Axios.get("https://dotify-9c677.firebaseio.com/reviews.json")
      .then((res) => {
        if (res.data) {
          setReviews(res.data);
        }
      })
      .catch((err) => {});
  }

  return (
    <div>
      {!addingReview ? (
        <div className={classes.ourReviews}>
          <div className={classes.headerHolder}>
            <PanelHeader title="Client reviews:" />
            <AddButtonPanel
              text="Add new review"
              clicked={() => addReviewHandler()}
            />
          </div>
          <div className={classes.reviewsHolder}>
            <table className={classes.table} cellSpacing="0">
              <thead className={classes.headerRow}>
                <tr>
                  <th className={classes.theader}>Client Name</th>
                  <th className={classes.theader}>On which product</th>
                  <th className={classes.theader}>Comment</th>
                  <th className={classes.theader}>Action</th>
                </tr>
              </thead>
              <tbody>
                { Object.values(reviews).length > 0 ? Object.values(reviews).map(review => (
                  <tr key={review.name}>
                    <td className={classes.bdata}>{review.name}</td>
                    <td className={classes.bdata}>{review.product}</td>
                    <td className={classes.bdata}>{review.comment}</td>
                    <td className={classes.bdata}>Edit</td>
                </tr>
                )) : null }
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={classes.addReviewContainer}>
          <PanelHeader title="Add new review:" />
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
              <div className={classes.selectHolder}>
                <p>Product:</p>
                <select className={classes.select} onChange={(e) => setProduct(e.target.value)}>
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
              <div className={classes.inputHolder}>
                <p>Comment:</p>
                <textarea
                  placeholder="Item name"
                  className={classes.input}
                  onChange={(e) => setComment(e.target.value)}
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
            text="Add new review"
            clicked={addedNewReviewHandler}
          />
        </div>
      )}
    </div>
  );
}

export default TestimonialsPanel;
