// components/Header.js
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/Header.module.css'; // If using CSS Modules

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  useEffect(() => {
    // Retrieve the state from localStorage if available
    const storedNavVisible = localStorage.getItem('navVisible');
    if (storedNavVisible) {
      setIsNavVisible(JSON.parse(storedNavVisible));
    }
  }, []);

  const toggleNav = () => {
    setIsNavVisible(prevState => !prevState);
  };

  useEffect(() => {
    // Store the state in localStorage
    localStorage.setItem('navVisible', JSON.stringify(isNavVisible));
  }, [isNavVisible]);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>firangiz ganbarli</div> 

      <div className={styles.hamburgerMenu} onClick={toggleNav}>
        <FaBars size={24} />
      </div>

      <nav className={isNavVisible ? `${styles.nav} ${styles.visible}` : styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/photography">Photography</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
