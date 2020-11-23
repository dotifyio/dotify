import React, { useState } from 'react'
import fire from '../../firebase'

import classes from './Panel.module.scss'
import Logo from '../../assets/Logo.svg'
// import General from './General/General'
// import HomepagePanel from './HomepagePanel/HomepagePanel'
// import ThemesPanel from './ThemesPanel/ThemesPanel'
// import ScriptsPanel from './ScriptsPanel/ScriptsPanel'
// import ClientsPanel from './ClientsPanel/ClientsPanel'
// import TestimonialsPanel from './TestimonialsPanel/TestimonialsPanel' 

function Panel() {
  const [mainContent, setMainContent] = useState("Testimonials")

  const logOutHandler = () => {
    fire.auth().signOut()
  }

  const contentRenderHandler = (e) => {
    setMainContent(e.target.innerHTML)
    console.log(mainContent);
  }

  const renderContent = () => {
    // switch (mainContent) {
    //   case "General":
    //     return <General />
    //   case "Homepage":
    //     return <HomepagePanel />
    //   case "Themes":
    //     return <ThemesPanel />
    //   case "Scripts":
    //     return <ScriptsPanel />
    //   case "Clients":
    //     return <ClientsPanel />
    //   case "Testimonials":
    //     return <TestimonialsPanel />
    //   default:
    //     break;
    // }
  }

  return (
    <div className={classes.container}>

    {/* The Side Bar */}
    <div className={classes.sideBar}>
      <div className={classes.menuWrapper}>
        <img src={Logo} />
        <div className={classes.menuHolder}>
          <button className={classes.menuButton} onClick={(e) => contentRenderHandler(e)}>General</button>
          <button className={classes.menuButton} onClick={(e) => contentRenderHandler(e)}>Homepage</button>
          <button className={classes.menuButton} onClick={(e) => contentRenderHandler(e)}>Themes</button>
          <button className={classes.menuButton} onClick={(e) => contentRenderHandler(e)}>Scripts</button>
          <button className={classes.menuButton} onClick={(e) => contentRenderHandler(e)}>Clients</button>
          <button className={classes.menuButton} onClick={(e) => contentRenderHandler(e)}>Testimonials</button>
        </div>
      </div>
    </div>

    {/* The Main Content */}
    <div className={classes.mainContent}>
      <div className={classes.header}>
        <div className={classes.headerContentHolder}>
          <div>
            <p className={classes.title}>Welcome back, Boss!</p>
            <p className={classes.subTitle}>What can I do for you today?</p>
          </div>

          <button className={classes.logOutButton} onClick={() => logOutHandler()}>Log Out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className={classes.contentWrapper}>
        {/* {renderContent()} */}
        Panel
      </div>
    </div>
      
    </div>
  )
}

export default Panel
