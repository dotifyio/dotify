import React, { useEffect, useState } from "react";
import axios from 'axios'

import classes from "./ThemesPage.module.scss";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import WorkCard from "../../components/WorkCard/WorkCard";
import NeedUs from "../../components/NeedUs/NeedUs";
import Footer from "../../components/Footer/Footer";
import Image from '../../assets/Image.png'

function ThemesPage() {
  const [themes, setThemes] = useState({})

  useEffect(() => {
    document.title = 'Themes - Dotify';

    if(Object.keys(themes).length === 0) {
      getThemes();
    }
  }, [])

  const getThemes = async () => {
    await axios.get("https://dotify-9c677.firebaseio.com/themes.json")
      .then(res => {
        if (res.data) {
          setThemes(res.data)
        }
      })
      .catch(err => {})
  }

  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.themesSection}>
        <div className={classes.themesWrapper}>
          <SectionHeader
            aboveTitle="our themes"
            title="Our unique themes"
            subTitle="We create premium WordPress & HTML themes that make sense."
            color="#1198FB"
            bgColor="#ECF7FF"
          />
          <div className={classes.themesHolder}>
            <WorkCard image={Image} link={'https://codecanyon.net/item/download-instagram-videos-photos-and-albums/27557597'} name={"InstaSave"} label={"Web Application"} price={"17"} />
            {/* { Object.values(themes).length > 0 ? Object.values(themes).map(theme => (
              )) : null } */}
          </div>
        </div>

        <NeedUs />
        <Footer />
      </div>
    </div>
  );
}

export default ThemesPage;
