import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios'

import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  const [specialItem, setSpecialItem] = useState({ name: "", link: "", release: "" })

  useEffect(() => {
    getSpecialItem()
  }, [])

  const handleScrollToElement = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleIcon = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
  };

  window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('#nav');
    if(window.pageYOffset>0){
      nav.style.boxShadow = "-5px 15px 57px 0px rgba(0, 0, 0, 0.07)";
    }else{
      nav.style.boxShadow = "none";
    }
  });

  const getSpecialItem = () => {
    axios("https://dotify-9c677.firebaseio.com/specialItem.json")
      .then(res => {
        console.log(res);
        setSpecialItem({
          name: res.data.name,
          link: res.data.link,
          release: res.data.release
        })
      })
  }

  return (
    <div id="nav" className={classes.container} style={{}}>
      <div
        className={classes.openSideDrawer}
        style={{ width: toggle ? "100%" : "0px" }}
      >
        <div className={classes.sideNavMenu}>
          <p
            style={{
              transform: toggle ? "translateX(0)" : "translateX(100%)",
              opacity: toggle ? "1" : "0",
            }}
            onClick={() => toggleIcon()}
          >
            <Link to="/" className={classes.link}>
            Home
            </Link>
          </p>
          <p
            style={{
              transform: toggle ? "translateX(0)" : "translateX(100%)",
              opacity: toggle ? "1" : "0",
            }}
            onClick={() => toggleIcon()}
          >
            <Link to="/themes" className={classes.link}>
            Themes
            </Link>
          </p>
          <p
            style={{
              transform: toggle ? "translateX(0)" : "translateX(100%)",
              opacity: toggle ? "1" : "0",
            }}
            onClick={() => toggleIcon()}
          >
            <Link to="/scripts" className={classes.link}>
            Scripts
            </Link>
          </p>
          <p
            style={{
              transform: toggle ? "translateX(0)" : "translateX(100%)",
              opacity: toggle ? "1" : "0",
            }}
            onClick={() => toggleIcon()}
          >
            <Link to="/showcase" className={classes.link}>
            Showcase
            </Link>
          </p>
          <p
            style={{
              transform: toggle ? "translateX(0)" : "translateX(100%)",
              opacity: toggle ? "1" : "0",
            }}
            onClick={() => toggleIcon()}
          >
            <Link to="/contact" className={classes.link}>
            Contact
            </Link>
          </p>
        </div>
      </div>

      <div className={classes.menuHolder}>
        <Link exact="true" to="/">
          <Logo className={classes.logo} />
        </Link>
        <div
          id={classes.navicon1}
          className={toggle ? classes.open : null}
          onClick={() => toggleIcon()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classes.menu}>
          <p>
            <NavLink exact to="/" className={classes.link} activeStyle={{ color: "#FFCB5D" }}>
              Home
            </NavLink>
          </p>
          <p>
            <NavLink to="/themes" className={classes.link} activeStyle={{ color: "#FFCB5D" }}>
              Themes
            </NavLink>
          </p>
          <p>
            <NavLink to="/scripts" className={classes.link} activeStyle={{ color: "#FFCB5D" }}>
              Scripts
            </NavLink>
          </p>
          <p>
            <NavLink to="/showcase" className={classes.link} activeStyle={{ color: "#FFCB5D" }}>
              Showcase
            </NavLink>
          </p>
          <p>
            <NavLink to="/contact" className={classes.link} activeStyle={{ color: "#FFCB5D" }}>
              Contact
            </NavLink>
          </p>
        </div>
      </div>
      <div className={classes.newItemHolder}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            className={classes.newItemIcon}
            href={specialItem.link}
          >
            <span className={classes.newIcon}>{specialItem.release}</span> {specialItem.name}
          </a>
          {props.isOnHomePage ? (
            <p
              onClick={() => handleScrollToElement(props.contactRef)}
              className={classes.sayHiText}
            >
              Say hi
            </p>
          ) : (
            <p className={classes.sayHiText}>
              <Link className={classes.link} to="/contact">
                Say hi
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
