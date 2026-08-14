import React from 'react';
import AnswerOption from './AnswerOption';

export default function QuestionCard({ questionObj, selectedAnswerId, onSelectAnswer }) {
  const letters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="question-card">
      <div className="question-category-pill">
        <span className="category-icon">✦</span>
        <span>{questionObj.category}</span>
      </div>

      <h2 className="question-title-text">{questionObj.question}</h2>

      <div className="answers-list">
        {questionObj.answers.map((ans, idx) => (
          <AnswerOption
            key={ans.id}
            optionLetter={letters[idx] || `${idx + 1}`}
            answer={ans}
            isSelected={selectedAnswerId === ans.id}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}
