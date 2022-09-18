import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions, quizSelectors } from '../../../redux/quizSlice';

export const Question = () => {
  const [shuffledOptions, shuffleOptions] = useState([]);
  const { currentQuestionId } = useSelector(quizSelectors.rootSelector);
  const quizData = useSelector(quizSelectors.selectQuizData);
  const question = useSelector(quizSelectors.selectCurrentQuestion);
  const answerId = useSelector(quizSelectors.selectAnswerId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (question) shuffleOptions(shuffle(question.options));
  }, [question])

  if (!question) { return null; }

  const saveAnswer = (selectedAnswerId) => {
    const newQuizData = quizData.map(item => item.questionId === currentQuestionId ? {
      questionId: currentQuestionId,
      answerId: selectedAnswerId
    } : item);

    dispatch(quizActions.updateQuizData(newQuizData));
  };

  return (
    <>
      <div className="question">{question.question}</div>
      <div className="list-group">
        {shuffledOptions.map(({ id, label }, idx) => (
          <button
            key={idx}
            onClick={() => saveAnswer(id)}
            className={`
              list-group-item list-group-item-action
              ${answerId === id ? "active" : ""}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};