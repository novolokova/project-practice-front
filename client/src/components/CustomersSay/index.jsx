import React from 'react';
import carouselConstants from '../../carouselConstants';
import SliderBar from '../SliderBar';
import data from './data.json';
import styles from './CustomersSay.module.sass';

const CustomersSay = () => {
  return (
    <div className={styles.blueContainer}>
      <h2 className={styles.whiteUnderline}>{data.title}</h2>
      <SliderBar
        images={carouselConstants.feedbackSliderImages}
        carouselType={carouselConstants.FEEDBACK_SLIDER}
      />
    </div>
  );
};

export default CustomersSay;
