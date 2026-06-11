import React from 'react';

import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  return (
    <main className={styles.dashboard}>
      <div className={styles.centeredContent}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </main>
  );
};
