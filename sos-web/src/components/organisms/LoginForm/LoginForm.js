import { useState } from 'react';
import { Input } from '../../molecules/Input/Input';
import { Heading } from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon/Icon';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { StyledContainer, StyledForm, StyledButton } from './LoginForm.styles';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = ({ target }) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <>
      <StyledContainer>
        <Icon.Logo />
        <Heading type="h1" color="purple" textAlign="center">
          Dobrodošli!
        </Heading>
        <Paragraph type="medium" color="grey" textAlign="center">
          Unesite Vaše podate kako bi pristupili SOS aplikaciji.
        </Paragraph>
        <StyledForm>
          <Input
            label="Email*"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <Input
            label="Password*"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={form.password}
            required
          />
          <StyledButton type="submit" onClick={handleSubmit}>
            Prijavi se!
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default LoginForm;
