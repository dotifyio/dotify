import React, { useEffect, useState } from "react";
import axios from 'axios'

import classes from "./ThemesPage.module.scss";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import WorkCard from "../../components/WorkCard/WorkCard";
import NeedUs from "../../components/NeedUs/NeedUs";
import Footer from "../../components/Footer/Footer";

function ThemesPage() {
  const [themes, setThemes] = useState({})

  useEffect(() => {
    document.title = 'Themes - Dotify';

    // if(Object.keys(themes).length === 0) {
    //   getThemes();
    // }
  }, [])

  const getThemes = async () => {
    
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

            {/* { Object.values(themes).length > 0 ? Object.values(themes).map(theme => (
              <WorkCard image={theme.image} link={theme.link} name={theme.name} label={theme.label} price={theme.price} />
            )) : null } */}
  
            <p style={{ textAlign: "center" }}>New themes on the way.</p>
          </div>
        </div>

        <NeedUs />
        <Footer />
      </div>
    </div>
  );
}

export default ThemesPage;
