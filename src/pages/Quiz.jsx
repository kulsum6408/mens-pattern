import React from 'react';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';

export default function Quiz({
  questions,
  currentIndex,
  userAnswers,
  onSelectAnswer,
  onPrevQuestion,
  onNextQuestion,
  onFinishQuiz,
  onRestart
}) {
  const currentQuestionObj = questions[currentIndex];
  const totalQuestions = questions.length;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const currentAnswerId = userAnswers[currentQuestionObj.id];
  const hasSelectedAnswer = Boolean(currentAnswerId);

  return (
    <div className="page-container quiz-page">
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
      />

      <QuestionCard
        questionObj={currentQuestionObj}
        selectedAnswerId={currentAnswerId}
        onSelectAnswer={(ansId) => onSelectAnswer(currentQuestionObj.id, ansId)}
      />

      <div className="quiz-navigation-controls">
        <button
          className="nav-btn prev-btn"
          onClick={onPrevQuestion}
          disabled={isFirstQuestion}
        >
          ← Previous
        </button>

        {!isLastQuestion ? (
          <button
            className={`nav-btn next-btn ${!hasSelectedAnswer ? 'disabled' : ''}`}
            onClick={onNextQuestion}
            disabled={!hasSelectedAnswer}
          >
            Next →
          </button>
        ) : (
          <button
            className={`nav-btn finish-btn ${!hasSelectedAnswer ? 'disabled' : ''}`}
            onClick={onFinishQuiz}
            disabled={!hasSelectedAnswer}
          >
            See Results 🎉
          </button>
        )}
      </div>
    </div>
  );
}
