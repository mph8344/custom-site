import React, { memo, useCallback, useRef, useState } from 'react';

import Grid from '../../components/Grid/Grid';

import styles from './HomeScreen.module.scss';
import { uniqueId } from 'lodash';

const entries = [
  {
    id: uniqueId(),
    date: '01-01-2001',
    title: 'heartforms.txt',
  },
  {
    id: uniqueId(),
    date: '01-06-2005',
    title: 'tetherheart.txt',
  },
];

interface Answers {
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface OtherAnswers {
  q1: boolean;
  q2: boolean;
}

type Props = {
  initialAnswers: Answers;
  handleChange: (answers: Partial<Answers>) => void;
};

const UFormComponent: React.FC<Props> = ({ initialAnswers, handleChange }) => {
  console.log(initialAnswers);

  return (
    <div>
      <div>
        <input
          type='text'
          defaultValue={initialAnswers.firstName ?? ''}
          onChange={(e) => handleChange({ firstName: e.target.value })}
        />
      </div>
      <div>
        <input
          type='text'
          defaultValue={initialAnswers.lastName ?? ''}
          onChange={(e) => handleChange({ lastName: e.target.value })}
        />
      </div>
      <div>
        <input
          type='text'
          defaultValue={initialAnswers.email ?? ''}
          onChange={(e) => handleChange({ email: e.target.value })}
        />
      </div>
    </div>
  );
};

const FormComponent = memo(UFormComponent);

export const HomeScreen: React.FC = () => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.fakeBrowser}>
        <div className={`flexbox ${styles.navBar}`}>
          <div className={styles.navText}>{'Log Database'}</div>
          <div className={styles.fakeButtons}>
            <div className={styles.button}>
              <span>{'?'}</span>
            </div>
            <div className={styles.button}>
              <span>{'X'}</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={`flexbox flex-col ${styles.entryWindow}`}>
            <div className={`${styles.tableHeader}`}>
              <div>id</div>
              <div>date</div>
              <div>title</div>
            </div>
            <div className={`${styles.entryTable}`}>
              {entries.map((e) => (
                <div className={`flexbox ${styles.logEntry}`} key={e.id}>
                  <div className={styles.entryId}>{e.id}</div>
                  <div className={styles.entryDate}>{e.date}</div>
                  <div className={styles.entryTitle}>{e.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
