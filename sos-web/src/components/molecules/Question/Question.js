import { useCallback, useMemo } from 'react';
import { useDataContext } from '../../../utils/store';
import { Noop } from '../../atoms/Noop/Noop';
import { Radio } from '../Radio/Radio';
import { TextArea } from '../TextArea/TextArea';
import { StyledQuestion, QuestionTitle } from './Question.styles';

export const Question = ({ label, id, options, condition, ...props }) => {
  const { data, setData } = useDataContext();

  const handleOnChange = useCallback(
    ({ target }) => {
      setData({
        [id]: target.value,
      });
    },
    [id, setData],
  );

  const handleTextareChange = useCallback(
    ({ target }) => {
      setData({
        description: target.value,
      });
    },
    [setData],
  );

  const userAnswer = data?.[condition?.questionId];

  const shouldBeHidden = useMemo(() => {
    if (!condition) return false;

    const exactAnswerRequired = !!condition.answerId;

    const exactAnswerMatch = userAnswer === condition.answerId;
    const anyAnswerMatch = !exactAnswerRequired && userAnswer;

    const shouldBeDisplayed = exactAnswerMatch || anyAnswerMatch;
    return !shouldBeDisplayed;
  }, [condition, userAnswer]);

  return shouldBeHidden ? (
    <Noop />
  ) : (
    <StyledQuestion {...props}>
      <QuestionTitle>{label}</QuestionTitle>
      {options.length === 0 && (
        <TextArea value={data?.description} onChange={handleTextareChange} />
      )}
      {options.map(({ id: optionId, label: optionLabel }) => (
        <Radio
          key={optionId}
          label={optionLabel}
          value={optionId}
          name={label}
          isChecked={data[id] === optionId}
          onChange={handleOnChange}
        />
      ))}
    </StyledQuestion>
  );
};
