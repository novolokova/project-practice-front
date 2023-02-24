import React from 'react';
import CONSTANTS from '../../../../constants';
import styles from '../../OurSponsors.module.sass';

const Logo = (props) => {
  const { activeImgPath, inactiveImgPath, alt } = props;
  return (
    <div className={styles.images}>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}${inactiveImgPath}`}
        alt={alt}
      />
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${activeImgPath}`} alt={alt} />
    </div>
  );
};

export default Logo;
