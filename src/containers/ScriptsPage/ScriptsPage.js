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

    // if(Object.keys(scripts).length === 0) {
    //   getScripts();
    //   console.log("works");
    // }
  }, [])

  const getScripts = async () => {
    
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
            
            {/* { Object.values(scripts).length > 0 ? Object.values(scripts).map(script => ( */}
              <WorkCard image={Image} link='https://codecanyon.net/item/download-instagram-videos-photos-and-albums/27557597' name="InstaSave" label="Web application" price="17" />

          </div>
        </div>

        <NeedUs />
        <Footer />
      </div>
    </div>
  );
}

export default ScriptsPage;
