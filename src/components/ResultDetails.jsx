import React from 'react';

export default function ResultDetails({ answerDetails }) {
  return (
    <div className="result-details-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">See Your Answers</h2>
        <p className="section-subtitle">
          Review how each behavior choice contributed to your final pattern score.
        </p>
      </div>

      <div className="details-cards-grid">
        {answerDetails.map((item, idx) => {
          const isGreen = item.classification === 'green';

          return (
            <div key={item.questionId} className={`detail-card ${isGreen ? 'green-card' : 'red-card'}`}>
              <div className="detail-card-header">
                <span className="question-number-badge">Question {idx + 1}</span>
                <span className="category-tag">{item.category}</span>
                <span className={`classification-badge ${isGreen ? 'badge-green' : 'badge-red'}`}>
                  {isGreen ? '🟢 Green Flag' : '🔴 Red Flag'}
                </span>
              </div>

              <h3 className="detail-question-text">{item.questionText}</h3>

              <div className="user-answer-box">
                <span className="answer-label">Your answer:</span>
                <blockquote className="answer-quote">“{item.selectedAnswer}”</blockquote>
              </div>

              {item.insight && (
                <div className="behavioral-insight-box">
                  <span className="insight-icon">💡</span>
                  <span className="insight-text">{item.insight}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
