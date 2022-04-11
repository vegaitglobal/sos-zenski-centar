export const shouldBeDisplayed = (data, condition) => {
  const userAnswer = data?.[condition?.questionId];

  const exactAnswerRequired = !!condition?.answerId;

  const exactAnswerMatch = userAnswer === condition?.answerId;
  const anyAnswerMatch = !exactAnswerRequired && userAnswer;

  const showQuestion = exactAnswerMatch || anyAnswerMatch;

  return showQuestion;
}
