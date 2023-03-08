import React, { useState } from 'react';
import { Close, Add } from '@mui/icons-material';
import styles from './SingleQuestion.module.scss';

const SingleQuestion = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const { question, answerList } = props;

  const changeInfo = () => setShowInfo(!showInfo);
  const showAnswer = (answerList) =>
    answerList.map((answ, i) => (
      <li key={i} className={styles.li}>
        {answ}
      </li>
    ));
  return (
    <article className={showInfo ? styles.articleActive : styles.articleUnactive}>
      <header onClick={() => changeInfo()} className={styles.header}>
        <h3 className={styles.title}>{question}</h3>
        <span className={styles.span}>{showInfo ? <Close /> : <Add />}</span>
      </header>
      <div className={styles.wrapAnswerList}>
        {showInfo && <ul>{showAnswer(answerList)}</ul>}
      </div>
    </article>
  );
};

export default SingleQuestion;
