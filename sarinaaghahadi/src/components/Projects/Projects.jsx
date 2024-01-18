import React, {useState}from "react";

import styles from "./Projects.module.css";
import {getImageUrl} from "../../utils"

export const Projects = () => {
return ( 
    <div className={styles.contaier}>
<h1 className={styles.title} >Sorry, this project is being build!</h1>
<img className={styles.projectsImg}
src={getImageUrl("projects/pj.png")} alt="" />
    </div>

)
}