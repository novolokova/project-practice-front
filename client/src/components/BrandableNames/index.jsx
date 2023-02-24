import React, { useState } from 'react';
import styles from './BrandableNames.module.scss';

const BrandableNames = () => {
  const [btnState, setBtnState] = useState([
    {
      title: 'Top Categories',
      isColor: false,
    },
    {
      title: 'Top Industry',
      isColor: false,
    },
    {
      title: 'Top Ideas',
      isColor: true,
    },
  ]);
  const handleClick = (targetTitle) => {
    const newState = btnState.map((item) => ({
      ...item,
      isColor: item.title === targetTitle ? true : false,
    }));
    setBtnState(newState);
  };

  const mapBtn = (btn) => (
    <button
      key={btn.title}
      className={btn.isColor ? styles.activBtn : styles.inactiveBtn}
      onClick={() => handleClick(btn.title)}
    >
      {btn.title}
    </button>
  );

  return (
    <section className={styles.container}>
      <article>
        <h3>Largest Collection of Brandable Names</h3>
        <p>
          Explore themed brand name collections created by our experienced team
          of branding experts
        </p>
      </article>
      <div className={styles.containerBtn}>{btnState.map(mapBtn)}</div>
    </section>
  );
};

export default BrandableNames;
