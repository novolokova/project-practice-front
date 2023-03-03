import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './Step.module.scss';

const Step = (props) => {
  const { id, titleStep, steps, imgPath, alt, color } = props;

  const mapCard = (st, i) => (
    <p key={i}>
      <i className="fas fa-check" />
      <span>{st}</span>
    </p>
  );

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: color.bakgrColor, color: color.textColor }}
      >
        {!(id % 2) ? (
          <div className={styles.step}>
            <div className={styles.stepCard}>
              <h3>{titleStep}</h3>
              {steps.map(mapCard)}
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgPath}`} alt={alt} />
          </div>
        ) : (
          <div className={styles.step}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgPath}`} alt={alt} />
            <div className={styles.stepCard}>
              <h3>{titleStep}</h3>
              {steps.map(mapCard)}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Step;
