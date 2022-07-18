import { useMemo } from 'react';
import { useState } from 'react/cjs/react.development';
import { useFormInput } from '../../../hooks/useFormInput';
import {
  checkEmail,
  checkPassword,
} from '../../../utils/inputValidation.services';
import { Loader } from '../../atoms/Loader/Loader';
import { Button } from '../../molecules/Button/Button';
import { Checkbox } from '../../molecules/Checkbox/Checkbox';
import { Input } from '../../molecules/Input/Input';
import {
  LoginFail,
  StyledButtonHolder,
  StyledForm,
} from '../LoginForm/LoginForm.styles';
import { StyledContainer, StyledHeading } from './UserForm.styles';

export const UserForm = ({
  title,
  buttonLabel,
  formHandler,
  user,
  isLoading,
  isError,
}) => {
  const [form, setForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    isAdmin: user?.isAdmin || false,
  });

  const handleChange = ({ target }) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleCheckbox = ({ target }) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.checked,
    }));
  };

  const {
    isValid: emailValid,
    touched: emailTouched,
    ...email
  } = useFormInput('', (value) => checkEmail(value));

  const {
    isValid: passwordValid,
    touched: passwordTouched,
    ...password
  } = useFormInput('', (value) => checkPassword(value));

  const formValid = useMemo(
    () => emailValid && passwordValid,
    [emailValid, passwordValid],
  );

  return (
    <StyledContainer>
      <StyledHeading type="h2" color="purple" textAlign="center">
        {title}
      </StyledHeading>
      <StyledForm>
        <Input
          label="Ime"
          type="text"
          name="firstName"
          id="name"
          onChange={handleChange}
          value={form.firstName}
          disabled={isLoading}
        />
        <Input
          label="Prezime"
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleChange}
          value={form.lastName}
          disabled={isLoading}
        />
        {!user && (
          <Input
            label="Email*"
            type="email"
            name="email"
            id="email"
            disabled={isLoading}
            {...email}
            valid={emailValid}
            touched={emailTouched}
            errorMessage="Email ima pogrešan format!"
          />
        )}
        <Input
          label="Password*"
          type="password"
          name="password"
          id="password"
          disabled={isLoading}
          {...password}
          valid={passwordValid}
          touched={passwordTouched}
          errorMessage="Šifra mora da ima najmanje 8 karektera, bar jedno veliko slovo i cifru!"
        />
        <Checkbox
          label="Admin"
          id="isAdmin"
          name="isAdmin"
          value={form.isAdmin}
          isChecked={form.isAdmin}
          onChange={handleCheckbox}
        />
        {isError && (
          <LoginFail>Zahtev neuspešan. Molimo pokušajte ponovo.</LoginFail>
        )}
        <StyledButtonHolder>
          {isLoading ? (
            <Loader />
          ) : (
            <Button
              type="submit"
              onClick={(e) =>
                formHandler(e, {
                  ...form,
                  email: email.value,
                  password: password.value,
                })
              }
              disabled={
                (user && password.value && !passwordValid) ||
                (!user && !formValid)
              }
            >
              {buttonLabel}
            </Button>
          )}
        </StyledButtonHolder>
      </StyledForm>
    </StyledContainer>
  );
};
