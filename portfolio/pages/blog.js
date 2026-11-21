import React from 'react';
import Layout from '../components/Layout';
import SubstackPosts from '../components/SubstackPosts';
import { getSubstackPosts } from '../lib/substack';
import siteConfig from '../site.config';

export default function Blog({ posts, substackUrl }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <SubstackPosts posts={posts} substackUrl={substackUrl} />
    </Layout>
  );
}

// Runs at build time. The deploy workflow rebuilds daily, so new posts appear automatically.
export async function getStaticProps() {
  const { substackUrl, blogPostCount } = siteConfig;
  const posts = await getSubstackPosts(substackUrl, blogPostCount);
  return { props: { posts, substackUrl } };
}
