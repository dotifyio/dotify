import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom'

import classes from "./Login.module.scss";
import Cover from "../../assets/Palete.svg";
import fire from "../../firebase";

function Login() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    document.title = 'Login - Dotify';
  }, [])

  const loginHandler = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire.auth().signInWithEmailAndPassword(email, password)
      .then(ul => {
        setIsAuth(true)
      })
      .catch(err => {
        
      })
  }

  let redirect = null;
  if (isAuth) {
    redirect = <Redirect to="/panel" />;
  }

  return (
    <div className={classes.container}>
      {redirect}
      <div className={classes.quoteSection}>
        <img src={Cover} className={classes.img} />
        <div className={classes.gradient}></div>
        <div>
          <p className={classes.quote}>
            "Work work day and night just to see a little light."
          </p>
          <p className={classes.author}>Naim Frasheri</p>
        </div>
      </div>

      <div className={classes.formSection}>
        <div className={classes.formWrapper}>
          <p className={classes.loginTitle}>Welcome back boss!</p>
          <p className={classes.loginSub}>Admin Login</p>

          <div className={classes.inputHolder}>
            <input id="email" type="text" placeholder="Email" className={classes.input} />
            <input id="password" type="password" placeholder="Password" className={classes.input} />
          </div>

          <button onClick={() => loginHandler()} className={classes.button}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
