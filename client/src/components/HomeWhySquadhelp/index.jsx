import React from 'react';
import data from './data.json';
import CardArticle from './CardArticle';
import styles from './HomeWhySquadhelp.module.sass';

const HomeWhySquadhelp = () => {
  const mapArticles = ({ imgPath, alt, title, description }, i) => (
    <CardArticle
      key={i}
      imgPath={imgPath}
      alt={alt}
      title={title}
      description={description}
    />
  );
  return (
    <section className={styles.container__description}>
      <h2 className={styles.blueUnderline}>{data.heading}</h2>
      <div className={styles.cardContainer}>
        {data.articles.map(mapArticles)}
      </div>
    </section>
  );
};

export default HomeWhySquadhelp;
