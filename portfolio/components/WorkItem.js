import React from 'react';
import styles from '../styles/WorkItem.module.css'; // Assuming you're using CSS Modules

const WorkItem = ({ duration, title, imageSrc, role, altText, backgroundColor }) => {
  // Set a CSS variable dynamically based on the prop
  const containerStyle = {
    '--offset-color': backgroundColor, // Use the prop to set the CSS variable
  };

  return (
    <div className={styles.workCardContainer} style={containerStyle}>
      <div className={styles.workCard}>
        <h4 className={styles.workCardDuration}>{duration}</h4>
        <h5 className={styles.workCardTitle}>{title}</h5>
        <img className={styles.workCardImage} src={imageSrc} alt={altText} />
        <h4 className={styles.workCardRole}>{role}</h4>
      </div>
    </div>
  );
};

export default WorkItem;
