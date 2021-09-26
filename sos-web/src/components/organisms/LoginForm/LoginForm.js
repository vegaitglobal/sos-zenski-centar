import { useState } from 'react';
import { Input } from '../../molecules/Input/Input';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import {
  StyledContainer,
  StyledLogo,
  StyledForm,
  StyledButtonHolder,
  LoginFail,
} from './LoginForm.styles';
import { useFetch } from '../../../hooks/useFetch';
import { Loader } from '../../atoms/Loader/Loader';
import { Button } from '../../molecules/Button/Button';
import { useHistory } from 'react-router';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { sendRequest, isLoading, isError } = useFetch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    sendRequest('https://api.sos.sitesstage.com/api/Users/login', {
      method: 'POST',
      body: JSON.stringify(form),
    })
      .then((response) => {
        localStorage.setItem('token', `Bearer ${response.accessToken}`);
        localStorage.setItem('email', response.email);
        history.push('/');
      })
      .catch(() => {});
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
        <StyledLogo />
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
            disabled={isLoading}
            required
          />
          <Input
            label="Password*"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={form.password}
            disabled={isLoading}
            required
          />
          {isError && (
            <LoginFail>
              Prijavljivanje neuspešno. Molimo pokušajte ponovo.
            </LoginFail>
          )}
          <StyledButtonHolder>
            {isLoading ? (
              <Loader />
            ) : (
              <Button type="submit" onClick={handleSubmit}>
                Prijavi se!
              </Button>
            )}
          </StyledButtonHolder>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default LoginForm;
