import React from 'react';
import data from './data.json';
import CONSTANTS from '../../constants'
import styles from './HowDoContestWork.module.sass';
import Step from './Step';

const HowDoContestWork = () => {
  const mapArticles = ({ titleStep, steps, imgPath, alt }, i) => (
    <Step
    key={i}
    titleStep={titleStep}
    steps={steps}
    imgPath={imgPath}
    alt={alt}
    />
  );

    return (
       <>
        <h2>{data.heading}</h2>
<Step/>
        {data.articles.map(mapArticles)}



{/* 
        <div className={styles.whiteContainer}>
          <div className={styles.stepReverse}>
            <div>
              <h3>Step 1: Launch a Naming Contest</h3>
              <p>
                <i className='fas fa-check' />
                <span>
                  Start your project right with our proven Naming Brief
                  template
                </span>
              </p>
              <p>
                <i className='fas fa-check' />
                <span>
                  We’ll walk you through exactly what you need to share about your project in order to get an awesome Name
                </span>
              </p>
            </div>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/1-compressed.gif`}
              alt='compressed'
            />
          </div>
        </div>




        <div className={styles.greenContainer}>
          <div className={styles.step}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/2-compressed-new.gif`}
              alt='compressed'
            />
            <div className={styles.greenStep}>
              <h3>Step 2: Ideas start pouring in within minutes</h3>
              <p>
                <i className='fas fa-check' />
                <span>
                  100s of naming experts start submitting name ideas
                </span>
              </p>
              <p>
                <i className='fas fa-check' />
                <span>
                  Names automatically checked for URL availability
                </span>
              </p>
            </div>
          </div>
        </div>




        <div className={styles.greyContainer}>
          <div className={styles.stepReverse}>
            <div>
              <h3>Step 3: Rate Entries & Brainstorm with Creatives</h3>
              <p>
                <i className='fas fa-check' />
                <span>Provide instant feedback on Names</span>
              </p>
              <p>
                <i className='fas fa-check' />
                <span>
                  Send private feedback or public messages to all creatives
                </span>
              </p>
              <p>
                <i className='fas fa-check' />
                <span>
                  The more entries you rate - the submissions get better and
                  better
                </span>
              </p>
            </div>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/3-compressed.gif`}
              alt='compressed'
            />
          </div>
        </div> */}
        </>
    );
}

export default HowDoContestWork;