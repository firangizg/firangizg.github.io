// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css'; // If using CSS Modules

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>firangiz ganbarli</div> 
      <nav className={styles.nav}>
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