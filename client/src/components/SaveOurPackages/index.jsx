import React from 'react';
import data from './data.json';
import BundleBox from '../BundleBox/BundleBox';
import styles from './SaveOurPackages.module.sass';

const SaveOurPackages = (props) => {
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
    <div className={styles.combinedBundles}>
      <div className={styles.infoCombinedBundles}>
        <span className={styles.headerInfo}>{data.title}</span>
        <span className={styles.info}>{data.subtitle}</span>
        <hr />
      </div>
      <div className={styles.baseBundles}>
        <BundleBox
          path={['Name.png', 'Logo.png']}
          header="Name+Logo"
          describe="Get the essentials needed to establish your brand together and save."
          setBundle={setBundle}
        />
        <BundleBox
          path={['Name.png', 'Tagline.png']}
          header="Name+Tagline"
          describe="Communicate your vision with the perfect Name/Tagline combo."
          setBundle={setBundle}
        />
        <BundleBox
          path={['Logo.png', 'Tagline.png']}
          header="Tagline+Logo"
          describe="Description for Logo + Tagline will come here."
          setBundle={setBundle}
        />
        <BundleBox
          path={['Name.png', 'Logo.png', 'Tagline.png']}
          header="Name+Tagline+Logo"
          describe="Establish your entire brand identity and save with this bundle."
          setBundle={setBundle}
        />
      </div>
    </div>
  );
};

export default SaveOurPackages;
