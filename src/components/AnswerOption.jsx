import React from 'react';

export default function AnswerOption({ optionLetter, answer, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`answer-option-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(answer.id)}
      aria-pressed={isSelected}
    >
      <div className="option-badge">{optionLetter}</div>
      <div className="option-text">{answer.text}</div>
      <div className="selection-indicator">
        <div className="indicator-dot" />
      </div>
    </button>
  );
}
