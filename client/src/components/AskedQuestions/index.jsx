import React from 'react';
import data from './data.json';
import SingleQuestion from './SingleQuestion';
import styles from './AskedQuestions.module.scss';

const AskedQuestions = () => {
  const mapQuestions = ({ question, answerList }, i) => (
    <SingleQuestion key={i} question={question} answerList={answerList} />
  );
  return (
    <div className={styles.container}>
      <h2>{data.heading}</h2>
      {data.faq.map(mapQuestions)}
    </div>
  
  );
};

export default AskedQuestions;
