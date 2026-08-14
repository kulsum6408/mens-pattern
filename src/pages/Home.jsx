import React from 'react';

export default function Home({ onStartTest }) {
  return (
    <div className="page-container home-page">
      <div className="hero-card">
        <div className="hero-badge">
          <span className="heart-pulse">❤️</span>
          <span>Relationship Quiz</span>
        </div>

        <h1 className="hero-title">Know His Pattern ❤️</h1>
        <h2 className="hero-subtitle">Red Flag or Green Flag?</h2>

        <p className="hero-description">
          “Answer honest questions about relationship behavior and discover the pattern behind his choices.”
        </p>

        <div className="cta-wrapper">
          <button className="start-test-btn" onClick={onStartTest}>
            START TEST
            <span className="btn-arrow">→</span>
          </button>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">📝</span>
            <span className="feature-text">10 Questions</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔒</span>
            <span className="feature-text">100% Anonymous</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span className="feature-text">No Account Required</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span className="feature-text">Instant Score Gauge</span>
          </div>
        </div>
      </div>

      <div className="home-info-cards">
        <div className="info-card">
          <div className="info-card-icon">🧠</div>
          <h3>Behavior Pattern Analysis</h3>
          <p>
            Relationships are shaped by repeating habits. This test evaluates real-world situations to reveal underlying behavioral trends.
          </p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🛡️</div>
          <h3>Private & Neutral</h3>
          <p>
            No registration, email, or login required. All answers stay strictly in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}
