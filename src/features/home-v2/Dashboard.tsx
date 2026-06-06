import React, { useMemo, useState, type ComponentType } from 'react';
import styles from './Dashboard.module.scss';
import { isNil } from 'lodash';

type MappedComponent = {
  icon: string;
  filled?: boolean;
  divider?: boolean;
  component: ComponentType;
};

const COMPONENT_MAP: Record<string, MappedComponent> = {
  home: {
    icon: 'home',
    filled: true,
    divider: true,
    component: () => <div>Home</div>,
  },
  cards: {
    icon: 'playing_cards',
    filled: true,
    component: () => <div>{'Gamble'}</div>,
  },
  layout: {
    icon: 'dashboard',
    filled: true,
    component: () => <div>{'Dashboard'}</div>,
  },
  admin: {
    icon: 'admin_panel_settings',
    component: () => <div>{'Administration'}</div>,
  },
};

export const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<
    undefined | keyof typeof COMPONENT_MAP
  >('home');

  const DisplayComponent = useMemo(() => {
    if (isNil(activeComponent)) {
      return null;
    }

    const Component = COMPONENT_MAP[activeComponent].component;

    return Component;
  }, [activeComponent]);

  return (
    <div className={`${styles.dashboard}`}>
      <div className={styles.dashboardContent}>
        <div className={styles.dashGrid}>
          <aside className={styles.navButtons}>
            {Object.entries(COMPONENT_MAP).map(([componentKey, details]) => {
              return (
                <React.Fragment key={componentKey}>
                  <button
                    data-active={componentKey === activeComponent}
                    data-variant='icon'
                    onClick={() => setActiveComponent(componentKey)}
                  >
                    <span
                      className='material-symbols-outlined'
                      data-filled={details.filled}
                    >
                      {details.icon}
                    </span>
                  </button>
                  {details.divider ? <div className='divider' /> : null}
                </React.Fragment>
              );
            })}
          </aside>
          <div className={styles.display}>
            {isNil(DisplayComponent) ? null : <DisplayComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};
