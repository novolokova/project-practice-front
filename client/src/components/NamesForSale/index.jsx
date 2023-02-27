import React from 'react';
import SliderBar from '../SlideBar/SlideBar';
import carouselConstants from '../../carouselConstants';
import data from './data.json';
import styles from './NamesForSale.module.sass';

const NamesForSale = () => {
  return (
    <>
      <div className={styles.headerBar}>
        <h3>{data.title}</h3>
        <p className={styles.blueUnderline}>{data.description}</p>
      </div>
      <SliderBar
        images={carouselConstants.exampleSliderImages}
        carouselType={carouselConstants.EXAMPLE_SLIDER}
      />
    </>
  );
};

export default NamesForSale;
