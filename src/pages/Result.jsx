import React, { useEffect } from 'react';
import ResultCard from '../components/ResultCard';
import ResultDetails from '../components/ResultDetails';

export default function Result({ results, onRetake, onGoHome }) {
  const isGreen = results.primaryResult === 'GREEN';

  useEffect(() => {
    // Scroll to top when results appear
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`page-container result-page ${isGreen ? 'theme-green' : 'theme-red'}`}>
      <ResultCard
        results={results}
        onRetake={onRetake}
        onGoHome={onGoHome}
      />

      <ResultDetails
        answerDetails={results.answerDetails}
      />
    </div>
  );
}
