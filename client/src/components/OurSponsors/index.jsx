import React from 'react';
import SponsorsLogo from './SponsorsLogo';
import Statistic from './Statistic';
import styles from './OurSponsors.module.scss';

const OurSponsors = () => {
  return (
    <div className={styles.greyContainer}>
      <SponsorsLogo />
      <Statistic />
    </div>
  );
};

export default OurSponsors;
