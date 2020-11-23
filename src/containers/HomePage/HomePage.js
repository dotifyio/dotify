import React, { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "../../index.css"
import "react-multi-carousel/lib/styles.css";

import classes from "./HomePage.module.scss";
import Header from "../../components/Header/Header";
import Cover from "../../assets/Palete.svg";
import SeeWorkButton from "../../elements/SeeWorkButton/SeeWorkButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import UIService from "../../assets/Icon awesome-pen-nib.svg";
import FrontEndService from "../../assets/Icon awesome-th-large.svg";
import CodeService from "../../assets/Icon awesome-code.svg";
import DesktopService from "../../assets/Icon awesome-desktop.svg";
import ContactForm from "../../components/ContactForm/ContactForm";
import WorkCard from "../../components/WorkCard/WorkCard";
import MovementCard from "../../components/MovementCard/MovementCard";
import Check from "../../assets/Icon awesome-check.png";
import People from "../../assets/Icon awesome-users.png";
import Code from "../../assets/Icon awesome-code.png";
import Cubes from "../../assets/Icon awesome-th-large.png";
import ClientCard from "../../components/ClientCard/ClientCard";
import Client from "../../assets/Image2.png";
import NeedUs from "../../components/NeedUs/NeedUs";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../assets/Union 2.png";
import Dots2 from "../../assets/Home-02.svg";
import Elipse from "../../assets/Inner-Page3.svg";
import ClientReview from "../../components/ClientReview/ClientReview";
import Axios from "axios";
import Work from '../../assets/Image.png'

function HomePage() {
  const contactRef = useRef();
  const ourWorkRef = useRef();

  const [workButton, setWorkButton] = useState(false);
  const [workButton2, setWorkButton2] = useState(false);
  const [movements, setMovements] = useState({})

  const isMobile = window.innerWidth < 992;
  const showItems = isMobile ? 1 : 2;

  useEffect(() => {
    document.title = 'Dotify';

    getMovementsStats()
  }, [])

  const getMovementsStats = () => {
    Axios.get("https://dotify-9c677.firebaseio.com/movement.json")
      .then(res => setMovements(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className={classes.container}>
      <Header isOnHomePage={true} contactRef={contactRef} />

      <div className={classes.homeView}>
        <img src={Cover} className={classes.coverImage} />
        <div className={classes.homeWrapper}>
          <p className={classes.title}>
            Dotify <br />
            Creative<span className={classes.dot}>.</span>
          </p>
          <p className={classes.homeParagraph}>
            We know how important customer experience is for a business, and
            therefore, we strive.
          </p>
          <SeeWorkButton elementRef={ourWorkRef} value="See Our Work" />
        </div>
      </div>

      <div className={classes.services}>
        <div className={classes.serviceWrapper}>
          <SectionHeader
            aboveTitle="what we can do for you"
            title="Services we can help you with"
            subTitle="Listed below are some of our key features you can rely on."
            color="#702FFF"
            bgColor="#c8b0ff"
          />
          <div className={classes.servicesHolder}>
            <ServiceCard
              color="#E2D5FF"
              img={UIService}
              title="UI & UX Design"
              subTitle="A complete user-friendly UI interface with the most modern look and feel. "
            />
            <ServiceCard
              color="#ECF7FF"
              img={FrontEndService}
              title="Front-End Dev"
              subTitle="Using the most modern technologies we will develop your website in front-end."
            />
            <ServiceCard
              color="#FFF5DE"
              img={CodeService}
              title="Back-End Dev"
              subTitle="Your website functionality will work at it's finest. Security and fast work will be with you."
            />
            <ServiceCard
              color="#CCCCDA"
              img={DesktopService}
              title="Desktop Apps"
              subTitle="If you need a desktop application, we can design and develop it for you."
            />
          </div>
        </div>
      </div>

      <div className={classes.knowUsSection} ref={contactRef}>
        <div className={classes.knowUsWrapper}>
          <div className={classes.aboutUsHolder}>
            <p className={classes.aboveTitle}>about us</p>
            <p className={classes.knowUsTitle}>We do design, code & develop.</p>
            <p className={classes.knowUsParagraph}>
              We are web freaks who love digital world. Being in this industry
              for more than 10 years we managed to gain a huge amount of
              knowledge of web development, app development, graphic design,
              UI/UX design, prototype and motion graphics. <br />
              <br />
              We are good at designing and developing different themes
              especially for HTML and WordPress. We use the most modern
              technologies which relays in speed, security and functionality.{" "}
              <br />
              <br />
              We also work on custom projects with different clients all over
              the world. We make your dream project a reality. Fill the contact
              form and we will reach you as soon as possible.
            </p>
          </div>
          <ContactForm />
          <img src={Dots2} className={classes.dots}/>
          <img src={Elipse} className={classes.elipse} />
        </div>
      </div>

      <div className={classes.ourWorkSection} ref={ourWorkRef}>
        <div className={classes.ourWorkWrapper}>
          <SectionHeader
            aboveTitle="our projects"
            title="Some of our finest work"
            subTitle="Have a look at our best premium themes and scripts."
            color="#1198FB"
            bgColor="#ECF7FF"
          />

          <div className={classes.ourWorkHolder}>
            <WorkCard image={Work} name="InstaSave" price="17" label="Build with InstaSave" link="https://codecanyon.net/item/download-instagram-videos-photos-and-albums/27557597" />
            {/* <WorkCard />
            <WorkCard /> */}
          </div>
          <div className={classes.ourWorkButtonsHolder}>
            <div className={classes.seeMore} id={classes.desktopSeeMore}>
              <div className={classes.line}></div>
              <span className={classes.seeMoreText}>Wanna see more?</span>
              <div className={classes.line}></div>
            </div>
            <div className={classes.buttonsHolder}>
              <Link to="/themes">
                <button
                  className={classes.seeWorkButton}
                  onMouseOver={() => setWorkButton(true)}
                  onMouseLeave={() => setWorkButton(false)}
                >
                  <span
                    style={{ left: workButton ? "20px" : "50%", transform: workButton ? "translate(0, -50%)" : "translate(-50%, -50%)" }}
                    className={classes.seeWorkButtonText}
                  >
                    Check Our Themes
                  </span>
                  <div
                    className={classes.arrowIcon}
                    style={{
                      right: workButton ? "20px" : "0",
                      opacity: workButton ? "1" : "0",
                    }}
                  >
                    <img src={Arrow} />
                  </div>
                </button>
              </Link>
              <div className={classes.seeMore} id={classes.mobileSeeMore}>
                <div className={classes.line}></div>
                <span className={classes.seeMoreText}>Wanna see more?</span>
                <div className={classes.line}></div>
              </div>
              <Link to="/scripts">
                <button
                  className={classes.seeWorkButton}
                  onMouseOver={() => setWorkButton2(true)}
                  onMouseLeave={() => setWorkButton2(false)}
                >
                  <span
                    style={{ left: workButton2 ? "20px" : "50%", transform: workButton2 ? "translate(0, -50%)" : "translate(-50%, -50%)" }}
                    className={classes.seeWorkButtonText}
                  >
                    Check Our Scripts
                  </span>
                  <div
                    className={classes.arrowIcon}
                    style={{
                      right: workButton2 ? "20px" : "0",
                      opacity: workButton2 ? "1" : "0",
                    }}
                  >
                    <img src={Arrow} />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ourMovementSection}>
        <div className={classes.ourMovementWrapper}>
          <SectionHeader
            aboveTitle="experts in field"
            title="Our Movement"
            subTitle="Some wonderful stats in our movement."
            color="#FFCB5D"
            bgColor="#FFF5DE"
          />

          <div className={classes.movementHolder}>
            <MovementCard img={Check} stats={movements.yearsOfExperience} title="Years of experience" />
            <MovementCard
              img={People}
              stats={movements.clients}
              title="Happy clients and counting"
            />
            <MovementCard img={Code} stats={movements.scripts} title="Plugins and Scripts" />
            <MovementCard
              img={Cubes}
              stats={movements.themes}
              title="WordPress & HTML themes"
            />
          </div>
        </div>
      </div>

      <div className={classes.clientSection}>
        <div className={classes.clientWrapper}>
          <SectionHeader
            aboveTitle="companies with our dna"
            title="Client Showcase"
            subTitle="Beautiful sites built using our themes and scripts."
            color="#702FFF"
            bgColor="#E2D5FF"
          />

          <div className={classes.clientHolder}>
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            {/* <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" />
            <ClientCard img={Client} client="InstaSave" buildWith="InstaSave" /> */}
          </div>

          <SeeWorkButton
            elementRef={ourWorkRef}
            value="See More "
            left="45px"
          />
        </div>
      </div>

      {/* <div className={classes.reviewsSection}>
        <div className={classes.reviewsWrapper}>
          <SectionHeader
            aboveTitle="tesimonials"
            title="Some customer reviews"
            subTitle="We love hearing from our customers about their opinion on our scripts and themes. 
            Here are some of their thoughts."
            color="#702FFF"
            bgColor="#E2D5FF"
          />

          <div className={classes.carouselWrapper}>
            <div className={classes.mainReview}></div>

            <div className={classes.carousel}>
              <Carousel
              additionalTransfrom={0}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={5000}
              centerMode={false}
              className="carousel"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 2,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 992,
                    min: 464
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable>
                <ClientReview />
                <ClientReview />
                <ClientReview />
              </Carousel>
              </div>
          </div>
        </div>
      </div> */}

      <div className={classes.needUsSection}>
        <NeedUs isOnHomePage={true} contactRef={contactRef} />
      </div>

      <div className={classes.footerSection}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
