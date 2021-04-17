import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "../../index.css"
import "react-multi-carousel/lib/styles.css";
import Axios from 'axios'

import classes from "./ShowcasePage.module.scss";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ClientCard from "../../components/ClientCard/ClientCard";
import Client from "../../assets/Image2.png";
import Author from "../../assets/author.png";
import NeedUs from "../../components/NeedUs/NeedUs";
import Footer from "../../components/Footer/Footer";
import ClientReview from "../../components/ClientReview/ClientReview";

function ShowcasePage() {
  const [clients, setClients] = useState({})

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 992, itemsToShow: 2 },
    { width: 1150, itemsToShow: 2 },
    { width: 1450, itemsToShow: 2 },
    { width: 1750, itemsToShow: 2 },
  ];

  const isMobile = window.innerWidth < 992;
  const showItems = isMobile ? 1 : 2;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    document.title = "Showcase - Dotify";

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

  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.showcaseSection}>
        <div className={classes.showcaseWrapper}>
          <SectionHeader
            aboveTitle="companies with our dna"
            title="Client Showcase"
            subTitle="All of the sites in the showcase have been created by users or developers working on their behalf."
            color="#702FFF"
            bgColor="#c8b0ff"
          />

          <div className={classes.showcaseHolder}>
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            {/* { Object.values(clients).length > 0 ? Object.values(clients).map(client => (
              <ClientCard img={client.image} client={client.name} buildWith={client.buildWith} link={client.link} />
            )) : null } */}

            {/* <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" /> */}
          </div>
        </div>

        {/*  */}

        <NeedUs />
        <Footer />
      </div>
    </div>
  );
}

export default ShowcasePage;
