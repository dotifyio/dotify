import React, { useEffect, useState } from "react";
import Axios from 'axios'

import classes from "./ScriptsPage.module.scss";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import NeedUs from "../../components/NeedUs/NeedUs";
import Footer from "../../components/Footer/Footer";
import WorkCard from "../../components/WorkCard/WorkCard";
import Image from '../../assets/Image.png'

function ScriptsPage() {
  const [scripts, setScripts] = useState({})

  useEffect(() => {
    document.title = 'Scripts - Dotify';

    if(Object.keys(scripts).length === 0) {
      getScripts();
    }
  }, [])

  const getScripts = async () => {
    await Axios.get("https://dotify-9c677.firebaseio.com/scripts.json")
      .then(res => {
        if (res.data) {
          setScripts(res.data)
        }
      })
      .catch(err => err)
  }

  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.scriptsSection}>
        <div className={classes.scriptsWrapper}>
          <SectionHeader
            aboveTitle="our scripts"
            title="Our unique scripts"
            subTitle="Most advanced web technologies, techniques and designs in our scripts."
            color="#1198FB"
            bgColor="#ECF7FF"
          />

          <div className={classes.scriptsHolder}>
            <WorkCard image={Image} link={'https://codecanyon.net/item/download-instagram-videos-photos-and-albums/27557597'} name={"InstaSave"} label={"Web application"} price={"17"} />
            
            {/* { Object.values(scripts).length > 0 ? Object.values(scripts).map(script => (
            )) : null } */}

          </div>
        </div>

        <NeedUs />
        <Footer />
      </div>
    </div>
  );
}

export default ScriptsPage;
