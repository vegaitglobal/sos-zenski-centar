import { StyledDatePicker } from './DatePicker.styles';

export const DatePicker = ({ label, onChange, value, ...props }) => {
  return (
    <StyledDatePicker {...props}>
      <label htmlFor="date">{label}</label>
      <input type="date" id="date" value={value} onChange={onChange} />
    </StyledDatePicker>
  );
};
