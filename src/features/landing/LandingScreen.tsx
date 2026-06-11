import React, { useCallback, useRef, useState } from 'react';

import styles from './LandingScreen.module.scss';
import { useNavigate } from 'react-router';
import type { StarBackgroundHandle } from '../../components/StarBackground/StarBackground';
import { useAnimationPreference } from '../../hooks/useAnimationPreference';
import StarBackground from '../../components/StarBackground/StarBackground';

export const LandingScreen: React.FC = () => {
  const { enabled, toggle } = useAnimationPreference();
  const starRef = useRef<StarBackgroundHandle>(null);
  const [sweeping, setSweeping] = useState(false);

  const handleSweepOut = useCallback(async () => {
    if (sweeping) {
      return;
    }

    setSweeping(true);
    await starRef.current?.sweepOut();
    // toggle();
    setSweeping(false);
  }, [sweeping]);

  // const btnBase: React.CSSProperties = {
  //   width: '36px',
  //   height: '36px',
  //   borderRadius: '50%',
  //   border: '1px solid rgba(255,255,255,0.2)',
  //   background: 'rgba(20, 9, 16, 0.7)',
  //   backdropFilter: 'blur(6px)',
  //   cursor: 'pointer',
  //   fontSize: '16px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   transition: 'opacity 0.2s',
  //   padding: 0,
  // };

  const navigate = useNavigate();

  const goToDash = useCallback(() => {
    handleSweepOut().then(() => {
      navigate('/dash');
    });
  }, [handleSweepOut, navigate]);

  // const goToDash = () => navigate('/dash');

  return (
    //  <div className='app'>
    //   <StarBackground ref={starRef} enabled={enabled} />
    // <div
    //   style={{
    //     position: 'fixed',
    //     bottom: '16px',
    //     right: '16px',
    //     zIndex: 9999,
    //     display: 'flex',
    //     gap: '8px',
    //   }}
    // >
    //   <button
    //     onClick={handleSweepOut}
    //     disabled={!enabled  sweeping}
    //     title='Sweep stars away'
    //     aria-label='Sweep stars away'
    //     style={{
    //       ...btnBase,
    //       opacity: enabled && !sweeping ? 1 : 0.3,
    //     }}
    //   >
    //     ◎
    //   </button>
    //   <button
    //     onClick={toggle}
    //     title={enabled ? 'Disable star animation' : 'Enable star animation'}
    //     aria-label={
    //       enabled ? 'Disable star animation' : 'Enable star animation'
    //     }
    //     style={{
    //       ...btnBase,
    //       opacity: enabled ? 1 : 0.4,
    //     }}
    //   >
    //     ✦
    //   </button>
    // </div>

    <main className={styles.landingScreen}>
      <StarBackground ref={starRef} enabled={true} />

      <div className={styles.centeredText}>
        <span>{'scattered amongst the stars'}</span>
        <span>{'is where we may'}</span>
        <button data-variant='inline' onClick={goToDash}>
          {'begin'}
        </button>
      </div>

      {/* <div
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 9999,
          display: 'flex',
          gap: '8px',
        }}
      >
        <button
          onClick={handleSweepOut}
          disabled={!enabled || sweeping}
          title='Sweep stars away'
          aria-label='Sweep stars away'
          style={{
            ...btnBase,
            opacity: enabled && !sweeping ? 1 : 0.3,
          }}
        >
          ◎
        </button>
        <button
          onClick={toggle}
          title={enabled ? 'Disable star animation' : 'Enable star animation'}
          aria-label={
            enabled ? 'Disable star animation' : 'Enable star animation'
          }
          style={{
            ...btnBase,
            opacity: enabled ? 1 : 0.4,
          }}
        >
          ✦
        </button>
      </div> */}
    </main>
  );
};
