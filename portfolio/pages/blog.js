import React from 'react';
import Layout from '../components/Layout';
import Blog from '../components/BlogPost';

export default function Photography() {
  return (
    <Layout>
      <h1>BlogPost</h1>
      {/* PhotoGallery handles fetching and displaying images */}
      <Blog />
    </Layout>
  );
}