import React from 'react';

import styles from './LandingScreen.module.scss';
import { useNavigate } from 'react-router';

export const LandingScreen: React.FC = () => {
  const navigate = useNavigate();

  const goToDash = () => navigate('/dash');

  return (
    <main className={styles.landingScreen}>
      <div className={styles.centeredText}>
        <span>{'scattered amongst the stars'}</span>
        <span>{'is where we may'}</span>
        <button data-variant='inline' onClick={goToDash}>
          {'begin'}
        </button>
      </div>
    </main>
  );
};
