import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

import { questions } from './data/questions';
import { calculateQuizResults } from './utils/scoring';

import './styles/index.css';
import './styles/theme.css';

export default function App() {
  const [currentStep, setCurrentStep] = useState('home'); // 'home' | 'instructions' | 'quiz' | 'result'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);

  const handleStartTest = () => {
    setCurrentStep('instructions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setQuizResults(null);
    setCurrentStep('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAnswer = (questionId, answerId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinishQuiz = () => {
    const calculated = calculateQuizResults(userAnswers, questions);
    setQuizResults(calculated);
    setCurrentStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setQuizResults(null);
    setCurrentStep('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setQuizResults(null);
    setCurrentStep('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root-shell">
      <Header
        currentStep={currentStep}
        onGoHome={handleGoHome}
        onResetQuiz={handleRestart}
      />

      <main className="app-main-content">
        {currentStep === 'home' && (
          <Home onStartTest={handleStartTest} />
        )}

        {currentStep === 'instructions' && (
          <Instructions onStartQuiz={handleStartQuiz} />
        )}

        {currentStep === 'quiz' && (
          <Quiz
            questions={questions}
            currentIndex={currentIndex}
            userAnswers={userAnswers}
            onSelectAnswer={handleSelectAnswer}
            onPrevQuestion={handlePrevQuestion}
            onNextQuestion={handleNextQuestion}
            onFinishQuiz={handleFinishQuiz}
            onRestart={handleRestart}
          />
        )}

        {currentStep === 'result' && quizResults && (
          <Result
            results={quizResults}
            onRetake={handleRestart}
            onGoHome={handleGoHome}
          />
        )}
      </main>
    </div>
  );
}
