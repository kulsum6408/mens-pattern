import React from 'react';

export default function Header({ currentStep, onGoHome, onResetQuiz }) {
  return (
    <header className="brand-header">
      <div className="header-container">
        <div className="brand-logo" onClick={onGoHome} role="button" tabIndex={0}>
          <span className="logo-icon">❤️</span>
          <div className="logo-text">
            <span className="logo-title">Know His Pattern</span>
            <span className="logo-subtitle">Relationship Behavior Quiz</span>
          </div>
        </div>

        <nav className="header-nav">
          {currentStep !== 'home' && (
            <button className="nav-link-btn" onClick={onGoHome}>
              Home
            </button>
          )}
          {(currentStep === 'quiz' || currentStep === 'result') && (
            <button className="nav-link-btn outline" onClick={onResetQuiz}>
              Restart
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
