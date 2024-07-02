import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
    return (
        /* Adding id="about" allows navigation to the About section */
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={getImageUrl("about/aboutImage.png")} alt="about" className={styles.aboutImage}/>
                    <p className={styles.imageSubtitle}>Me and the CEO of Uber</p>
                </div>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/devIcon.png")} className={styles.aboutItemImage} alt="Dev icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Software Engineer</h3>
                            <p>I'm a software engineer specializing in backend and machine learning applications.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} className={styles.aboutItemImage} alt="Server icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I'm a backend developer with experience in building REST APIs, database integration, hosting, and deployment.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/aiIcon.png")} className={styles.aboutItemImage} alt="AI icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>ML Engineer</h3>
                            <p>I'm a machine learning engineer with experience in deep learning, LLMs, RAG, and vector databases.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
