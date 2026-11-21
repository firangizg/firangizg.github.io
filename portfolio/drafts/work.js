import React from 'react';
import Layout from '../components/Layout';
import WorkItem from '../components/WorkItem';
import styles from '../styles/WorkItem.module.css';

const WorkList = () => {
  return (
    <Layout>
    <h1>Work Experience</h1>
    <div className="work-items-container">
      <WorkItem 
        duration="Fall 2021 – Present" 
        title="Bouncr" 
        imageSrc="path_to_your_image.png"
        altText="Bouncr Logo"
        role="Innovation / Mobile App Design + Development"
        backgroundColor="#C56262" // Example color
      />
      <WorkItem 
        duration="Fall 2021 – Present" 
        title="Bouncr" 
        imageSrc="path_to_your_image.png"
        altText="Bouncr Logo"
        role="Innovation / Mobile App Design + Development"
        backgroundColor="#3B6740" // Example color
      />
      <WorkItem 
        duration="Fall 2021 – Present" 
        title="Bouncr" 
        imageSrc="path_to_your_image.png"
        altText="Bouncr Logo"
        role="Innovation / Mobile App Design + Development"
        backgroundColor="#365C58" // Example color
      />
      <WorkItem 
        duration="Fall 2021 – Present" 
        title="Bouncr" 
        imageSrc="path_to_your_image.png"
        altText="Bouncr Logo"
        role="Innovation / Mobile App Design + Development"
        backgroundColor="#848A5C" // Example color
      />
      <WorkItem 
        duration="Fall 2021 – Present" 
        title="Bouncr" 
        imageSrc="path_to_your_image.png"
        altText="Bouncr Logo"
        role="Innovation / Mobile App Design + Development"
        backgroundColor="#413B67" // Example color
      />
    </div>
    </Layout>
  );
};

export default WorkList;
