import React from 'react';

export default function Instructions({ onStartQuiz }) {
  return (
    <div className="page-container instructions-page">
      <div className="instructions-card">
        <div className="instructions-header">
          <span className="info-badge">📋 Overview</span>
          <h1 className="instructions-title">How It Works</h1>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Real-World Scenarios</h3>
              <p>Answer each question based on what you would actually do in the situation.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Choose Your Behavior</h3>
              <p>Choose the answer that best describes your behavior.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Be Completely Honest</h3>
              <p>There are no correct answers. Be honest for the most accurate pattern analysis.</p>
            </div>
          </div>
        </div>

        <div className="instructions-footer">
          <button className="start-quiz-btn" onClick={onStartQuiz}>
            START QUIZ
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
