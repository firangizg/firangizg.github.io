import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/firangizg/';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.notice}>
        <p>hi, i’m firangiz — i’m working on this website right now.</p>
        <p>
          for my latest updates, find me on{' '}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">linkedin</a>.
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
