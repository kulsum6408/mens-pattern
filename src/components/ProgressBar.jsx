import React from 'react';

export default function ProgressBar({ currentIndex, totalQuestions }) {
  const currentStep = currentIndex + 1;
  const percentage = Math.round((currentStep / totalQuestions) * 100);

  return (
    <div className="quiz-progress-wrapper">
      <div className="progress-meta">
        <span className="question-count-text">
          Question <strong>{currentStep}</strong> of <strong>{totalQuestions}</strong>
        </span>
        <span className="progress-percentage-text">{percentage}% Completed</span>
      </div>
      <div className="progress-track" aria-label={`Quiz progress: ${percentage}%`}>
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
