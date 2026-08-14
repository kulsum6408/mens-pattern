import React from 'react';

export default function ResultCard({ results, onRetake, onGoHome }) {
  const isGreen = results.primaryResult === 'GREEN';
  const dominantPercent = isGreen ? results.greenPercentage : results.redPercentage;

  // Calculate SVG stroke offset for animated circular gauge
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (dominantPercent / 100) * circumference;

  return (
    <div className={`result-card-main ${isGreen ? 'green-style' : 'red-style'}`}>
      <div className="flag-visual-badge">
        <span className="large-flag-icon">🚩</span>
      </div>

      <div className="gauge-container">
        <svg className="radial-progress-svg" viewBox="0 0 160 160">
          <circle
            className="gauge-track"
            cx="80"
            cy="80"
            r={radius}
            strokeWidth="12"
          />
          <circle
            className="gauge-fill"
            cx="80"
            cy="80"
            r={radius}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 80 80)"
          />
        </svg>
        <div className="gauge-center-text">
          <span className="percentage-number">{dominantPercent}%</span>
          <span className="percentage-label">{results.headline}</span>
        </div>
      </div>

      <h1 className="result-headline-title">
        {results.icon} {results.headline}
      </h1>

      <p className="result-summary-description">{results.summaryMessage}</p>

      <div className="stats-breakdown-row">
        <div className={`stat-pill ${isGreen ? 'highlight' : ''}`}>
          <span className="pill-icon">🟢</span>
          <span className="pill-count">{results.greenCount} Green Flags</span>
          <span className="pill-pct">({results.greenPercentage}%)</span>
        </div>
        <div className={`stat-pill ${!isGreen ? 'highlight' : ''}`}>
          <span className="pill-icon">🔴</span>
          <span className="pill-count">{results.redCount} Red Flags</span>
          <span className="pill-pct">({results.redPercentage}%)</span>
        </div>
      </div>

      <div className="privacy-disclaimer-note">
        <p>{results.disclaimer}</p>
      </div>

      <div className="result-actions-group">
        <button className="primary-action-btn retake-btn" onClick={onRetake}>
          🔄 TAKE TEST AGAIN
        </button>
        <button className="secondary-action-btn home-btn" onClick={onGoHome}>
          🏠 BACK TO HOME
        </button>
      </div>
    </div>
  );
}
