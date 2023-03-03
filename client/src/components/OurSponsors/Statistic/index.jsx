import React from 'react';
import data from './data.json';
import styles from './Statistic.module.sass';

const Statistic = () => {
  const mapStats = ({ quantity, activity }, i) => (
    <div key={i}>
      <p>{quantity}</p>
      <span>{activity}</span>
    </div>
  );
  return <div className={styles.stats}>{data.map(mapStats)}</div>;
};

export default Statistic;
