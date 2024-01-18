import React from "react";


import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
    return <section className={styles.container} id="about">
<h2 className={styles.title}>About</h2>
<div className={styles.content}>
    <img 
    src={getImageUrl("about/aboutImage.png")}  className={styles.aboutImage}/>
    <ul className={styles.aboutItems}> 

        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} 
       />
        <div className={styles.aboutItemText}>
        <h3>Design Mastery from Diverse Phases:</h3>
        <p>My design expertise is an amalgamation of countless phases, each contributing to the tapestry of my creative journey. </p>
        </div>
        
        </li>

        <li className={styles.aboutItem}> 
        <img src={getImageUrl("about/uiIcon.png")} />
        <div className={styles.aboutItemText}><h3>Vast Web Design Horizon:</h3>
        <p>Navigating the vast horizon of web design, my experience spans diverse projects, infusing creativity into every pixel and code snippet.</p> </div>
        
        </li>

        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} />
        <div className={styles.aboutItemText}>
        <h3>Web Development Virtuoso:</h3>
        <p>With a skill set honed through countless lines of code, I stand as a virtuoso in web development, crafting digital experiences that seamlessly marry form and function.
        </p>
        </div>
        </li>

    </ul>
    </div>
    </section>};
