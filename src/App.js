import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";
import HomePage from "./containers/HomePage/HomePage";
import ThemesPage from "./containers/ThemesPage/ThemesPage";
import ScriptsPage from "./containers/ScriptsPage/ScriptsPage";
import ShowcasePage from "./containers/ShowcasePage/ShowcasePage";
import Contact from "./containers/Contact/Contact";
import Login from "./containers/Login/Login";
import ScrollToTop from "./containers/ScrollToTop";
import fire from "./firebase";
import Panel from "./containers/Panel/Panel";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  let routes = (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/themes" component={ThemesPage} />
      <Route exact path="/scripts" component={ScriptsPage} />
      <Route path="/showcase" component={ShowcasePage} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </>
  );
 
  if (user) {
    routes = (
      <>
        <Route path="/" exact component={HomePage} />
        <Route path="/themes" component={ThemesPage} />
        <Route exact path="/scripts" component={ScriptsPage} />
        <Route path="/showcase" component={ShowcasePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/panel" component={Panel} />
      </>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route
          render={({ location, history }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={650} classNames="fade">
                <ScrollToTop>
                  <Switch location={location}>{routes}</Switch>
                </ScrollToTop>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
