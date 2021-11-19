import { useCallback, useMemo } from 'react';
import { shouldBeDisplayed } from '../../../utils/shouldBeDisplayed';
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

  const showQuestion = useMemo(() => shouldBeDisplayed(data, condition), [data, condition]);

  return showQuestion ? (
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
  ) : (
    <Noop />
  );
};
