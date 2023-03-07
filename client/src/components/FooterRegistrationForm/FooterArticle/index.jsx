import React from 'react';
import styles from './FooterArticle.module.scss';

const FooterArticle = (props) => {
  const { title, describe } = props;

  // const content = describe.replace('FAQs', '<span className={styles.orangeSpan}>FAQs</span>')

  // const content = describe.replace('FAQs', '<div class="orangeSpan">FAQs</div>')


  const content = describe.replace('FAQs', '<span style="color: #f18762">FAQs</span>');
  const content2 = describe.replace('message', '<span style="color: #f18762">message</span>');
  
  return (
    // <>
    //   <div className={styles.headerArticle}>{title}</div>
    //   <div className={styles.article}>{describe}</div>
    //   {console.log(describe)}
    // </>
    <>
    <div className={styles.headerArticle}>{title}</div>
    <div className={styles.article}>
    <div dangerouslySetInnerHTML={{
            __html: content
        }} />
      </div>
  
  </>

  );
};

export default FooterArticle;

// {/* <span className={styles.orangeSpan}>FAQs</span>
// <span className={styles.orangeSpan}>message</span>
// {CONSTANTS.PHONE} 
// <span className={styles.orangeSpan}>Branding Consultation</span> */}

// (877) 355-3585
