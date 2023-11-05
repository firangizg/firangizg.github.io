import React from 'react';
import Layout from '../components/Layout';
import WorkItem from '../components/WorkItem';

export default function Work() {
  // Sample data, but you might fetch this from an API or your CMS
  const workItems = [
    { id: 1, title: 'Project 1', description: 'Description here...' },
    // ... other work items
  ];

  return (
    <Layout>
      <h1>My Work</h1>
      {workItems.map(item => (
        <WorkItem key={item.id} title={item.title} description={item.description} />
      ))}
    </Layout>
  );
}