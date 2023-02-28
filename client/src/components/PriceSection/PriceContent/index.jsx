import React, { useState, useEffect } from 'react';
import styles from './PriceContent.module.scss';

const PriceContent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const maxWidth = 760;
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
    </li>
  );
  const mapItems = (item, i) => (
    <li key={i} data-tooltip={item.dataContent} className={styles.item}>
      <i class="fa fa-check"></i>
      {item.item}
    </li>
  );
  const mapOptionsAfter = (item, i) => (
    <li key={i} data-tooltip={item.tooltip} className={styles.li}>
      {item.content}
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
        <p>{width > maxWidth && subTitle}</p>
        <h3 style={{ color: color.value }}>
           {currency}
          {amount}
        </h3>
      </div>
      
      <div className={styles.panelBody} >
        <ul className={styles.ul}>
          {width > maxWidth
            ? optionsBefore.map(mapOptionsBefore)
            : isOpen && optionsBefore.map(mapOptionsBefore)}
        </ul>
        <ul className={styles.li}>
          {width > maxWidth
            ? items.map(mapItems)
            : isOpen && items.map(mapItems)}
        </ul>
        <ul className={styles.ul}>
          {width > maxWidth
            ? optionsAfter.map(mapOptionsAfter)
            : isOpen && optionsAfter.map(mapOptionsAfter)}
        </ul>
        {width > maxWidth ? (
          <button
            style={{ backgroundColor: color.value }}
            className={styles.btn}
          >
            <i className="fa fa-check"></i>Start
          </button>
        ) : (
          isOpen && (
            <button
              style={{ backgroundColor: color.value }}
              className={styles.btn}
            >
              <i className="fa fa-check"></i>Start
            </button>
          )
        )}
      </div>
    </li>
  );
};

export default PriceContent;
