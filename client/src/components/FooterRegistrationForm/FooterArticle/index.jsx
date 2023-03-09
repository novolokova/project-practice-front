import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './FooterArticle.module.scss';

const FooterArticle = (props) => {
  const { title, describe } = props;

  const content = (describe) => {
    const text = describe.replace(
      `${CONSTANTS.PHONE}`,
      `<span>${CONSTANTS.PHONE}</span>`
    );
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    );
  };
  return (
    <>
      <div className={styles.headerArticle}>{title}</div>
      <div className={styles.article}>{content(describe)}</div>
    </>
  );
};

export default FooterArticle;
