import React from 'react';
import data from './data.json';
import Logo from './Logo';
import styles from './SponsorsLogo.module.sass';

const SponsorsLogo = () => {
  const mapImages = ({ activeImgPath, inactiveImgPath, alt }, i) => (
    <Logo
      key={i}
      activeImgPath={activeImgPath}
      inactiveImgPath={inactiveImgPath}
      alt={alt}
    />
  );
  return <div className={styles.adv}>{data.map(mapImages)}</div>;
};

export default SponsorsLogo;
