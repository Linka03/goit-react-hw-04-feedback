// Statistics.jsx
import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.container}>
      <p className={styles.item}>
        <span className={styles.label}>Good:</span> {good}
      </p>
      <p className={styles.item}>
        <span className={styles.label}>Neutral:</span> {neutral}
      </p>
      <p className={styles.item}>
        <span className={styles.label}>Bad:</span> {bad}
      </p>
      <p className={styles.item}>
        <span className={styles.label}>Total:</span> {total}
      </p>
      <p className={styles.item}>
        <span className={styles.label}>Positive feedback:</span>{' '}
        {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
