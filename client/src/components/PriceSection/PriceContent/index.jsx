import React, { useState, useEffect } from 'react';
import CONSTANTS from '../../../constants';
import styles from './PriceContent.module.scss';

const PriceContent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const {
    priceContent: {
      id,
      title,
      subTitle,
      price: { currency, amount },
      optionsBefore,
      items,
      optionsAfter,
    },
    color,
    isOpen: { isOpen },
    handleClick,
  } = props;
  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  const mapOptionsBefore = (item, i) => (
    <li key={i} data-tooltip={item.tooltip} className={styles.li}>
      {item.content}
      {item.tooltip !== null && width > CONSTANTS.MAX_WIDTH_PRICE ? (
        <div className={styles.tooltip}>{item.tooltip}</div>
      ) : (
        <></>
      )}
    </li>
  );

  const mapItems = (item, i) => (
    <li key={i} data-tooltip={item.dataContent} className={styles.item}>
      <i className="fa fa-check"></i>
      {item.item}
      {width > CONSTANTS.MAX_WIDTH_PRICE ? (
        <div className={styles.tooltip}>{item.dataContent}</div>
      ) : (
        <></>
      )}
    </li>
  );
  const mapOptionsAfter = (item, i) => (
    <li key={i} data-tooltip={item.tooltip} className={styles.li}>
      {item.content}
      {width > CONSTANTS.MAX_WIDTH_PRICE ? (
        <div className={styles.tooltip}>{item.tooltip}</div>
      ) : (
        <></>
      )}
    </li>
  );
  return (
    <li
      className={styles.panel}
      style={{ borderColor: color.value }}
      onClick={() => handleClick(id)}
    >
      <div className={styles.panelHeader} style={{ borderColor: color.value }}>
        <h2 style={{ color: color.value }}>
          {title}
          {!isOpen ? (
            <span className="fa fa-plus"></span>
          ) : (
            <span className="fa fa-minus"></span>
          )}
        </h2>
        <p>{width > CONSTANTS.MAX_WIDTH_PRICE && subTitle}</p>
        <div style={{ color: color.value }} className={styles.currency}>
          {currency}
          {amount}
        </div>
      </div>
      {(width > CONSTANTS.MAX_WIDTH_PRICE || isOpen) && (
        <div className={styles.panelBody}>
          <ul className={styles.ul}>{optionsBefore.map(mapOptionsBefore)}</ul>
          <ul className={styles.li}>{items.map(mapItems)}</ul>
          <ul className={styles.ul}>{optionsAfter.map(mapOptionsAfter)}</ul>
          <button
            style={{ backgroundColor: color.value }}
            className={styles.btn}
          >
            <i className="fa fa-check"></i>Start
          </button>
        </div>
      )}
    </li>
  );
};

export default PriceContent;
