import React from 'react';

import styles from './AppHeader.module.scss';
import { useNavigate } from 'react-router';
import { useAnimationPreference } from '../../hooks/useAnimationPreference';
import { PopupMenu } from '../PopupMenu/PopupMenu';

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
  const { enabled, toggle } = useAnimationPreference();

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
          <button key={n.id} data-variant='secondary' data-compact>
            <span className='material-symbols-outlined filled'>{n.icon}</span>
          </button>
        ))}
      </div>

      <div className={styles.endButtons}>
        {/* <PopupMenu placement='above' /> */}
        {/* <PopupMenu placement='left' /> */}
        {/* <PopupMenu placement='below' /> */}
        <PopupMenu placement='below'>
          <div className='flex vert'>
            <button data-variant='tertiary' onClick={toggle}>
              {`${enabled ? 'Disable' : 'Enable'} Animations`}
            </button>
            <button data-variant='tertiary' data-compact>
              <span className='material-symbols-outlined'>{'info'}</span>
            </button>
          </div>
        </PopupMenu>
      </div>
    </header>
  );
};
