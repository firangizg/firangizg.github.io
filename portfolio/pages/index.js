// pages/index.js
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'; 

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        {/* Add your section content here */}
      </div>
      <div className={styles.content}>
        {/* Add additional content blocks here */}
      </div>
    </Layout>
  );
}
