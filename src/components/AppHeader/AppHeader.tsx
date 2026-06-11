import React from 'react';

import styles from './AppHeader.module.scss';
import { useNavigate } from 'react-router';

const NAV_LINKS = [
  {
    icon: 'playing_cards',
    id: 'comp1',
  },
  {
    icon: 'crossword',
    id: 'comp2',
  },
  {
    icon: 'mist',
    id: 'comp3',
  },
  {
    icon: 'chess',
    id: 'comp4',
  },
];

export const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => navigate('/');

  return (
    <header className={`${styles.appHeader}`}>
      <button data-variant='secondary' onClick={goHome}>
        <div className={styles.logoContainer}>
          <span className='material-symbols-outlined filled'>{'brick'}</span>
          <span className={styles.appTitle}>{'solther.os'}</span>
        </div>
      </button>

      <div className={styles.navigation}>
        <div className='divider-vertical' />
        {NAV_LINKS.map((n) => (
          <button
            key={n.id}
            data-variant='secondary'
            style={{
              padding: 'var(--spacing-1)',
            }}
          >
            <span className='material-symbols-outlined filled'>{n.icon}</span>
          </button>
        ))}
      </div>

      <div className={styles.endButtons}>
        <button
          data-variant='icon'
          data-accented
          style={{ justifySelf: 'flex-end' }}
        >
          <span className='material-symbols-outlined filled'>{'settings'}</span>
        </button>
      </div>
    </header>
  );
};
