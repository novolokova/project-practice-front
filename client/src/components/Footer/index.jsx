import React from 'react';
import CONSTANTS from '../../constants';
import styles from './Footer.module.sass';

const Footer = () => {
  const topFooterItemsRender = (item) => (
    <div key={item.title}>
      <h4>{item.title}</h4>
      {item.items.map((i) => (
        <a key={i} href="https://google.com">
          {i}
        </a>
      ))}
    </div>
  );
  const topFooterRender = () =>
    CONSTANTS.FOOTER_ITEMS.map((item) => topFooterItemsRender(item));
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div>{topFooterRender()}</div>
      </div>
    </div>
  );
};

export default Footer;
