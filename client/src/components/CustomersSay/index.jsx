import React from 'react';
import data from './data.json';
import SliderBar from '../SliderBar';
import carouselConstants from '../../carouselConstants';
import styles from './CustomersSay.module.scss';

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
