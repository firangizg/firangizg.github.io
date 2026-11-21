import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const SUBSTACK_URL = 'https://substack.com/@firangizg';

export default function Blog() {
  return (
    <Layout>
      <div className={styles.notice}>
        <h1>Blog</h1>
        <p>
          i write on substack — find me at{' '}
          <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">substack.com/@firangizg</a>
        </p>
      </div>
    </Layout>
  );
}
