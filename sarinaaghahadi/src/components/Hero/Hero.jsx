import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey this is Sarina! </h1>
        <p className={styles.description}>While my heart may not flutter for React, my code certainly does. Despite the love-hate relationship, I navigate the intricacies of this library with finesse. The ability to seamlessly integrate APIs, design responsive interfaces, and optimize performance—these are the hallmarks of a good web developer, even in the face of a framework that fails to win my affections.</p>
        
        <a href="mailto:sarinaaghahadi@gmail" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}

