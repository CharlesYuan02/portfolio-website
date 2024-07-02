import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react'
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Charles Yuan</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    }
                    alt='menu-button' 
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                {/* If menuOpen is True, apply styles.menuOpen */}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                    {/* #about allows navigation to the About section */}
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
