import React from 'react';
import CONSTANTS from '../../../constants';
import data from './data.json';
import styles from '../OurSponsors.module.sass';

const SponsorsLogo = () => {
  {
    /* {data.map(({imgPath, alt})=>  <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgPath}`}
            alt={alt}
          />)} */
  }
  return (
    <div className={styles.adv}>



<div className={styles.images}>
 
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/Forbes-inactive.png`}
          alt="forbes"
        />
     
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/Forbes-active.png`}
          alt="forbes"
        />
      </div>
       
      <div className={styles.images}>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/the_next_web_inactive.png`}
          alt="web"
        />
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/the_next_web_active.png`}
          alt="web"
        />
      </div>
      
      <div className={styles.images}>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/mashable-inactive.png`}
          alt="mashable"
        />
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/mashable-active.png`}
          alt="mashable"
        />
      </div>


    </div>
  );
};

export default SponsorsLogo;
