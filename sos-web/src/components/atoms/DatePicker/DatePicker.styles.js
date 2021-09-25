import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  position: relative;
  margin-bottom: 1rem;

  label {
    margin-right: 1rem;
    position: absolute;
    right: calc(100% + 16px);
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.3rem;
    font-weight: 600;
  }

  input {
    padding: 1.1rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.purple};
  }
`;
