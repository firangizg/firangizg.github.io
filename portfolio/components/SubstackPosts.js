import React from 'react';
import styles from '../styles/SubstackPosts.module.css';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const SubstackPosts = ({ posts, substackUrl }) => {
  const base = substackUrl.replace(/\/+$/, '');

  return (
    <div className={styles.container}>
      {posts.length > 0 ? (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.link} className={styles.post}>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.postLink}>
                {post.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.image} alt="" className={styles.image} loading="lazy" />
                )}
                <div className={styles.body}>
                  {post.date && <p className={styles.date}>{formatDate(post.date)}</p>}
                  <h2 className={styles.title}>{post.title}</h2>
                  {post.description && <p className={styles.description}>{post.description}</p>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>
          Read my writing on <a href={base} target="_blank" rel="noopener noreferrer">Substack</a>.
        </p>
      )}

      <a href={base} target="_blank" rel="noopener noreferrer" className={styles.allPosts}>
        See all posts on Substack →
      </a>

      <iframe
        src={`${base}/embed`}
        className={styles.subscribe}
        title="Subscribe on Substack"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default SubstackPosts;
