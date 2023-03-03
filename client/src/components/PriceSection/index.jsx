import React, { useState } from 'react';
import data from './price.json';
import PriceContent from './PriceContent';
import CONSTANTS from '../../constants';
import styles from './PriceSection.module.scss';

const initialState = data.map((elem, i) => ({
  id: elem.id,
  isOpen: i === 0 ? true : false,
}));

const PriceSection = () => {
  const [elemOpen, setElemOpen] = useState(initialState);

  const handleIsOpen = (id) => {
    setElemOpen(
      elemOpen.map((item) => ({
        ...item,
        isOpen: item.id === id ? true : false,
      }))
    );
  };
  const mapPriceContent = (elem, i) => (
    <PriceContent
      handleClick={handleIsOpen}
      key={elem.id}
      priceContent={elem}
      color={CONSTANTS.COLORS_PRICE[i]}
      isOpen={elemOpen[i]}
    />
  );
  return (
    <section className={styles.container}>
      <ul className={styles.wrap}>{data.map(mapPriceContent)}</ul>
    </section>
  );
};

export default PriceSection;
