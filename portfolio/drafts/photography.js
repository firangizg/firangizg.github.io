import React from 'react';
import Layout from '../components/Layout';
import PhotoGallery from '../components/PhotoGallery';

export default function Photography() {
  return (
    <Layout>
      <h1>Photography</h1>
      {/* PhotoGallery handles fetching and displaying images */}
      <PhotoGallery />
    </Layout>
  );
}