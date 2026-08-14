/**
 * Scoring and Result Logic for "Know His Pattern"
 */

export function calculateQuizResults(userAnswers, questions) {
  let greenCount = 0;
  let redCount = 0;
  const totalQuestions = questions.length;

  const answerDetails = questions.map((q) => {
    const selectedAnswerId = userAnswers[q.id];
    const selectedAnswerObj = q.answers.find((a) => a.id === selectedAnswerId);

    if (selectedAnswerObj) {
      if (selectedAnswerObj.type === "green") {
        greenCount++;
      } else if (selectedAnswerObj.type === "red") {
        redCount++;
      }
    }

    return {
      questionId: q.id,
      category: q.category,
      questionText: q.question,
      selectedAnswer: selectedAnswerObj ? selectedAnswerObj.text : "No answer selected",
      classification: selectedAnswerObj ? selectedAnswerObj.type : "unknown",
      insight: selectedAnswerObj ? selectedAnswerObj.insight : ""
    };
  });

  const greenPercentage = Math.round((greenCount / totalQuestions) * 100);
  const redPercentage = Math.round((redCount / totalQuestions) * 100);

  /**
   * Deterministic Tie-Breaker Rule:
   * If greenCount > redCount => GREEN FLAG
   * If redCount > greenCount => RED FLAG
   * If greenCount === redCount => RED FLAG (defaulting to caution when behaviors are evenly split)
   */
  const primaryResult = greenCount > redCount ? "GREEN" : "RED";

  const headline = primaryResult === "GREEN" ? "GREEN FLAG" : "RED FLAG";
  const icon = primaryResult === "GREEN" ? "🟢" : "🔴";
  
  const summaryMessage =
    primaryResult === "GREEN"
      ? "Your answers show more positive relationship behaviors."
      : "Your answers show more concerning relationship behaviors.";

  const disclaimer =
    "Your result is based on the answers provided in this quiz. This quiz analyzes reported behavior patterns, not diagnosing a person.";

  return {
    greenCount,
    redCount,
    totalQuestions,
    greenPercentage,
    redPercentage,
    primaryResult, // "GREEN" | "RED"
    headline,
    icon,
    summaryMessage,
    disclaimer,
    answerDetails
  };
}
