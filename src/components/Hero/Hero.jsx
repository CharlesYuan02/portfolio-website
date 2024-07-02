import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Charles</h1>
                <p className={styles.description}>I'm a backend/ML developer, with experience at Uber and Qualcomm.</p>
                <a href="mailto:charlesyuan59@gmail.com" className={styles.contactBtn}>Contact</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="hero" className={styles.heroImage}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
