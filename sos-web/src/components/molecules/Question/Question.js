import { useDataContext } from '../../../utils/store';
import { Noop } from '../../atoms/Noop/Noop';
import { Radio } from '../Radio/Radio';
import { StyledQuestion, QuestionTitle } from './Question.styles';

export const Question = ({
  label,
  id,
  options,
  condition,
  children,
  ...props
}) => {
  const { data, setData } = useDataContext();

  const handleOnChange = ({ target }) => {
    setData({
      [id]: target.value,
    });
  };

  if (
    data?.[condition?.questionId] !== condition?.anaswerId &&
    (!data?.[condition?.questionId] || condition?.anaswerId !== null)
  ) {
    return <Noop />;
  }

  return (
    <StyledQuestion {...props}>
      <QuestionTitle>{label}</QuestionTitle>
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
