import React from 'react';
import CONSTANTS from '../../../../constants';
import styles from '../../OurSponsors.module.sass';

const Logo = () => {
    
    return (
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

    );
}

export default Logo;
