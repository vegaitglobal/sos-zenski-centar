import { StyledDatePicker } from './DatePicker.styles';

export const DatePicker = ({ label, onChange, value, name, ...props }) => {
  return (
    <StyledDatePicker {...props}>
      <label htmlFor="date">{label}</label>
      <input
        type="date"
        name={name}
        id="date"
        value={value}
        onChange={onChange}
      />
    </StyledDatePicker>
  );
};
