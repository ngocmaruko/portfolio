import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('about');

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={activeSec === 'about' ? styles.active : ''}>
            <a href="#about" onClick={() => setActiveSec('about')}>About</a>
          </li>
          <li className={activeSec === 'experience' ? styles.active : ''}>
            <a href="#experience" onClick={() => setActiveSec('experience')}>Experience</a>
          </li>
          <li className={activeSec === 'projects' ? styles.active : ''}>
            <a href="#projects" onClick={() => setActiveSec('projects')}>Projects</a>
          </li>
          <li className={activeSec === 'contact' ? styles.active : ''}>
            <a href="#contact" onClick={() => setActiveSec('contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
