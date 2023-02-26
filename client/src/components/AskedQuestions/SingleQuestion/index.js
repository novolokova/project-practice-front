import React, { useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../AskedQuestions.module.scss';


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
    <article
      className={showInfo ? styles.articleActive : styles.articleUnactive}
    >
      <header onClick={() => changeInfo()} className={styles.header}>
        <h3>{question}</h3>
        <span className={styles.span}>{showInfo ? "x" : '+'}</span>
      </header>
      <div className={styles.wrap}>
        {showInfo && <ul>{showAnswer(answerList)}</ul>}
      </div>
    </article>
  );
};

export default SingleQuestion;
