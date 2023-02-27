import React from 'react';
import data from './data.json';
import styles from './NamesForSale.module.sass';

const NamesForSale = () => {
  return (
    <>
      <div className={styles.headerBar}>
        <h3>{data.title}</h3>
        <p className={styles.blueUnderline}>{data.description}</p>
      </div>
    </>
  );
};

export default NamesForSale;
