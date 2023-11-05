import Image from 'next/image';
import Layout from '../components/Layout'; 
import styles from '../styles/Home.module.css'; 
import icon from '../public/assets/images/Icon.png';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <p>hi, i’m firangiz - student of computer science at University of Kansas, 
            incoming SWE at Microsoft, traveler, photographer, hackathon organizer from Baku, Azerbaijan</p>
          <p className={styles.insideLink}>more about <Link href="/about">me</Link></p>
          <div className={styles.links}>
            <Link href="https://www.linkedin.com/in/firangizg/">linkedin</Link>
            <Link href="https://github.com/firangizg">github</Link>
          </div>
        </div>
        <div className={styles.imageContent}>
          <Image 
            src={icon} 
            alt="Image of me" 
            width={500} 
            height={550}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 500px"
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
