import React from 'react';
import data from './data.json';
import FooterArticle from './FooterArticle';
import styles from './FooterRegistrationForm.module.scss';

const FooterRegistrationForm = () => {
  const mapArt = ({ title, describe }, i) => (
    <FooterArticle key={i} title={title} describe={describe} />
  );
  return (
    <div className={styles.footer}>
      <div className={styles.articlesMainContainer}>{data.map(mapArt)}</div>
    </div>
  );
};

export default FooterRegistrationForm;
