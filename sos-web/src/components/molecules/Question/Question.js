import { useCallback, useMemo } from 'react';
import { useNewEntryContext } from '../../../hooks/useNewEntryContext';
import { shouldBeDisplayed } from '../../../utils/shouldBeDisplayed';
import { useDataContext } from '../../../utils/store';
import { Noop } from '../../atoms/Noop/Noop';
import { Radio } from '../Radio/Radio';
import { TextArea } from '../TextArea/TextArea';
import { StyledQuestion, QuestionTitle } from './Question.styles';
import { CheckboxQuestion } from '../CheckboxQuestion/CheckboxQuestion';

export const Question = ({
  label,
  id,
  options,
  condition,
  multipleAnswers,
  ...props
}) => {
  const { data, setData } = useDataContext();
  const { errors } = useNewEntryContext();

  const handleOnChange = useCallback(
    ({ target }) => {
      setData({
        [id]: target.value,
      });
    },
    [id, setData],
  );

  const handleCheckboxChange = ({ target }) => {
    if (!data[id]?.length) {
      setData({ [id]: [target.value] });
      return;
    }
    data[id].push(target.value);
    setData(data);
  };

  const handleTextareChange = useCallback(
    ({ target }) => {
      setData({
        description: target.value,
      });
    },
    [setData],
  );

  const showQuestion = useMemo(
    () => shouldBeDisplayed(data, condition),
    [data, condition],
  );

  return showQuestion ? (
    <StyledQuestion {...props}>
      <QuestionTitle error={errors.includes(id)}>{label}</QuestionTitle>
      {options.length === 0 && (
        <TextArea value={data?.description} onChange={handleTextareChange} />
      )}
      {options.map(({ id: optionId, label: optionLabel }) =>
        multipleAnswers ? (
          <CheckboxQuestion
            key={optionId}
            label={optionLabel}
            value={optionId}
            name={label}
            isChecked={data[id] === optionId}
            onChange={handleCheckboxChange}
          />
        ) : (
          <Radio
            key={optionId}
            label={optionLabel}
            value={optionId}
            name={label}
            isChecked={data[id] === optionId}
            onChange={handleOnChange}
          />
        ),
      )}
    </StyledQuestion>
  ) : (
    <Noop />
  );
};
