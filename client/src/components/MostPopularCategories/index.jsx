import React from 'react';
import data from './data.json';
import BundleBox from '../BundleBox/BundleBox';
import styles from './MostPopularCategories.module.sass';

const MostPopularCategories = (props) => {
  const setBundle = (bundleStr) => {
    const array = bundleStr.toLowerCase().split('+');
    const bundleList = {};
    bundleList.first = array[0];
    for (let i = 0; i < array.length; i++) {
      bundleList[array[i]] = i === array.length - 1 ? 'payment' : array[i + 1];
    }
    props.choseBundle(bundleList);
    props.history.push(`/startContest/${bundleList.first}Contest`);
  };
  return (
    <div className={styles.baseBundleContainer}>
      <div className={styles.infoBaseBundles}>
        <span className={styles.headerInfo}>
          {data.title} <span>{data.highlightedWord}</span>
        </span>
        <span className={styles.info}>{data.subtitle}</span>
        <hr />
      </div>
      <div className={styles.baseBundles}>
        <BundleBox
          path={['Name.png']}
          header="Name"
          describe="Get up and running with the perfect name."
          setBundle={setBundle}
        />
        <BundleBox
          path={['Logo.png']}
          header="Logo"
          describe="Kickstart your venture with a unique, memorable logo."
          setBundle={setBundle}
        />
        <BundleBox
          path={['Tagline.png']}
          header="Tagline"
          describe="Connect deeply with your target audience with an on-target tagline."
          setBundle={setBundle}
        />
      </div>
    </div>
  );
};

export default MostPopularCategories;
