import React, { useState } from 'react';

import styles from './HomeScreen.module.scss';
import { uniqueId } from 'lodash';
import { ColorGrid } from '../../components/ColorGrid/ColorGrid';

const entries = [
  {
    id: uniqueId(),
    date: '01-01-2001',
    title: 'heartforms.txt',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris felis, ullamcorper a eleifend sagittis, tempor sed mi. Sed eget libero in augue scelerisque mollis. Integer elementum varius tempor. Phasellus suscipit tempor aliquam. Fusce rhoncus, mauris non commodo dictum, tellus magna mollis ipsum, et finibus tellus sapien eget nunc. Sed tempor mauris quis ipsum interdum maximus. Nullam pellentesque sapien nibh, id dignissim lorem vehicula a.',
  },
  {
    id: uniqueId(),
    date: '01-06-2005',
    title: 'tetherheart.txt',
    content:
      'Aenean porttitor sollicitudin tellus cursus blandit. Nunc interdum dolor quis pharetra tincidunt. Pellentesque laoreet mattis nisl vel tempus. Mauris turpis dui, fermentum nec velit finibus, semper bibendum orci. Quisque aliquam, mi at efficitur malesuada, lectus enim facilisis odio, vel accumsan lectus ipsum sit amet urna. In eleifend pretium arcu, ut elementum nulla. Curabitur pharetra dolor sed tellus hendrerit, in ullamcorper ex interdum. Donec et elit enim. Sed posuere nunc ut lectus lacinia scelerisque. Suspendisse viverra laoreet ornare.',
  },
  {
    id: uniqueId(),
    date: '01-06-2005',
    title: 'tetherheart.txt',
    content:
      'Fusce eros purus, gravida non augue in, fermentum convallis ipsum. In porttitor in est et dignissim. Morbi eget tincidunt quam. Nullam quis gravida augue, auctor finibus turpis. Quisque ut convallis lacus. Phasellus varius rhoncus velit ut luctus. Integer nec nibh ac velit aliquam lacinia.',
  },
  {
    id: uniqueId(),
    date: '01-06-2005',
    title: 'tetherheart.txt',
    content:
      'Cras bibendum congue arcu. Nunc nibh massa, lobortis ut purus ut, blandit cursus augue. Mauris tortor elit, ultricies quis dapibus in, congue vitae ex. Sed efficitur congue quam, eget facilisis neque hendrerit ut. Ut quis mi libero. Suspendisse potenti. Duis ullamcorper non justo sit amet finibus. Integer faucibus, velit eget vehicula facilisis, sem magna aliquam mi, at suscipit sem massa ut augue. Morbi pellentesque elit iaculis, aliquam enim at, efficitur nulla.',
  },
  {
    id: uniqueId(),
    date: '01-06-2005',
    title: 'tetherheart.txt',
    content:
      'Nulla facilisi. Ut gravida ipsum ipsum, ac porta nisi pharetra vel. Aliquam tincidunt mattis turpis, sed imperdiet dolor laoreet dignissim. Nunc et dignissim justo, at porta erat. Suspendisse lectus nulla, consectetur et tempus et, tincidunt sed lacus. Nullam posuere sem turpis, eu tristique quam interdum in. Quisque finibus est in sodales fermentum. Quisque vestibulum elit sit amet tellus accumsan, in aliquam ipsum vehicula. Curabitur ex magna, tempor vel orci eget, fringilla blandit justo. Proin consequat, nunc quis sodales volutpat, tellus erat vehicula quam, eu commodo quam metus at quam. Aliquam erat volutpat. Pellentesque nec erat ullamcorper, consequat nisl a, ultricies ante. Donec efficitur justo vitae scelerisque commodo. Nunc ullamcorper nunc id volutpat fermentum. Suspendisse mollis diam quis magna ultricies fringilla.',
  },
  {
    id: uniqueId(),
    date: '01-06-2005',
    title: 'tetherheart.txt',
    content:
      'Proin vel malesuada justo, ac mattis leo. Nam aliquet scelerisque lacinia. Sed ac auctor elit. Pellentesque rhoncus tincidunt lorem, ut vulputate mauris sagittis sit amet. Aliquam commodo blandit erat. Aliquam aliquam ligula at risus volutpat, eget laoreet sem aliquet. In massa arcu, ultricies et maximus in, tincidunt a turpis. Morbi a purus tincidunt, pharetra erat a, consequat libero. Vivamus maximus magna vel turpis tincidunt cursus.',
  },
];

export const HomeScreen: React.FC = () => {
  const [shownContent, setShownContent] = useState<string | null>(null);

  return (
    <div className={styles.homeScreen}>
      <div className={styles.navigationBar}>
        <button>{'dae-one.xyz'}</button>
      </div>
      <div className={styles.homeBody}>
        <div className={styles.content}>{shownContent}</div>
        <div className={styles.sidebar}>
          <ColorGrid />
          <div className={styles.entryContainer}>
            <h1>{'Entries'}</h1>
            <div className={styles.entryList}>
              {entries.map(({ title, id, date, content }) => {
                return (
                  <button
                    data-variant='primary'
                    className={styles.navItem}
                    key={id}
                    onClick={() => {
                      setShownContent(content);
                    }}
                  >
                    <span className={styles.navItemTitle}>{title}</span>
                    <span className={styles.navItemDescription}>{date}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
