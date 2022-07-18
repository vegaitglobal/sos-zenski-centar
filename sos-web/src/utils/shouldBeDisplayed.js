export const shouldBeDisplayed = (data, condition) => {
  const userAnswer = data?.[condition?.questionId];
  const exactAnswerRequired = !!condition?.answerId;
  const multipleAnswers = Array.isArray(userAnswer) ? userAnswer[0] : undefined;
  const exactAnswerMatch = multipleAnswers
    ? multipleAnswers === condition?.answerId
    : userAnswer === condition?.answerId;
  const anyAnswerMatch = !exactAnswerRequired && userAnswer;

  const showQuestion = exactAnswerMatch || anyAnswerMatch;

  return showQuestion;
};
