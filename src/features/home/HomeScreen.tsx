import styles from './HomeScreen.module.scss';

export const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.pillars}>
        <div className={styles.navPillarOne}></div>
        <div className={styles.divider}></div>

        <div className={styles.navPillarTwo}></div>
      </div>
      <div className={styles.backgroundPillar}>
        {/* <div className={styles.pillarBar}>
            <span>{'main menu'}</span>
          </div> */}
      </div>
      <div className={styles.menuItems}></div>
    </div>
  );
};
