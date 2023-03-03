import React from 'react';
import data from './data.json';
import CONSTANTS from '../../constants';
import styles from './HowDoContestWork.module.scss';
import Step from './Step';

const HowDoContestWork = () => {
  const mapArticles = ({ id, titleStep, steps, imgPath, alt }, i) => (
    <Step
      key={i}
      id={id}
      titleStep={titleStep}
      steps={steps}
      imgPath={imgPath}
      alt={alt}
      color={CONSTANTS.COLORS_CONTAINER[i]}
    />
  );
  return (
    <section className={styles.container}>
      <h2>{data.heading}</h2>
      {data.articles.map(mapArticles)}
    </section>
  );
};

export default HowDoContestWork;
