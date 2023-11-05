import styles from '../styles/Footer.module.css'; // If using CSS Modules

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Firangiz Ganbarli. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;