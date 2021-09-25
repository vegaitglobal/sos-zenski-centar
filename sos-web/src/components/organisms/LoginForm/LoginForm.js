import { useState } from 'react';
import { Input } from '../../molecules/Input/Input';
import { Heading } from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon/Icon';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import {
  StyledContainer,
  StyledForm,
  StyledLink,
  StyledButton,
} from './LoginForm.styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(email, password);
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Input
            label="Password*"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <StyledLink href="www.google.com">Zaboravili ste lozinku?</StyledLink>
          <StyledButton type="submit" onClick={(e) => handleSubmit(e)}>
            Prijavi se!
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default LoginForm;
