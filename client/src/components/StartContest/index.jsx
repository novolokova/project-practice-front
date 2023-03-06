import React from 'react';
import data from './data.json'
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './StartContest.module.sass';


const StartContest = () => {
    return (
        <div className={styles.startContestHeader}>
        <div className={styles.startContestInfo}>
          <h2>{data.title}</h2>
          <span>
            {data.content}
          </span>
        </div>
        <ProgressBar currentStep={1} />
      </div>
    );
}

export default StartContest;
