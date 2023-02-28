import React, { useState } from 'react';
import data from './price.json';
import PriceContent from './PriceContent';
import styles from "./PriceSection.module.scss"

const colors = [
  { name: 'bronze', value: '#e0b48c' },
  { name: 'gold', value: '#e8b954' },
  { name: 'platinum', value: '#555' },
  { name: 'managed', value: '#28d2d0' },
];
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
      color={colors[i]}
      isOpen={elemOpen[i]}
    />
  );
  return (
    <section className={styles.container}>
      <ul className={styles.wrap} >{data.map(mapPriceContent)}</ul>
    </section>
  );
};

export default PriceSection;