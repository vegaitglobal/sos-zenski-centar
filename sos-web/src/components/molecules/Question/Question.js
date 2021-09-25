import { useState } from 'react';
import { Radio } from '../Radio/Radio';
import { StyledQuestion, QuestionTitle } from './Question.styles';

export const Question = ({ children, ...props }) => {
  const [selected, setSelect] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const title = '1. Tip poziva';

  const array = [
    {
      text: 'Pozivalac trpi nasilje',
      value: '1',
    },
    {
      text: 'Pozivalac zove u ime druge osobe',
      value: '2',
    },
    {
      text: 'Poziv nije vezan za nasilje',
      value: '3',
    },
  ];

  return (
    <StyledQuestion {...props}>
      <QuestionTitle>{title}</QuestionTitle>
      {array.map((item) => {
        return (
          <Radio
            label={item.text}
            value={item.value}
            name="radio"
            isChecked={selected === item.value}
            onChange={handleSelectChange}
          ></Radio>
        );
      })}
    </StyledQuestion>
  );
};
