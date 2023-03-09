import { Button, FormHelperText, Grid } from '@mui/material';
import { AxiosError, AxiosResponse } from 'axios';
import { RegisterForm, RegisterUserInfo, ReviewerRegisterForm } from 'Interface/User';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './EmailInput';
import registerAPI from './RegisterAPI';
import { SubmitButtonProps } from './RegisterTypes';
import { validatePassword } from './PasswordInput';
import { validatePasswordConfirm } from './PasswordConfirmInput';

const requestRegister = (registerUserInfo: RegisterUserInfo) => {
  const { email, password, role, info } = registerUserInfo;
  const registerForm: RegisterForm = { email, password };
  const reviewerRegisterForm: ReviewerRegisterForm = { email, password, info };

  if (role === 'PI') {
    return registerAPI.pi(registerForm);
  } else if (role === 'REVIEWER') {
    // TODO: 언제 throw Error 할지, 언제 return 할지 기준알아보기
    if (info === undefined) throw Error('info is undefiened');
    return registerAPI.reviewer(reviewerRegisterForm);
  } else if (role === 'RESEARCHER') {
    return registerAPI.researcher(registerForm);
  } else {
    throw Error('role is not valid');
  }
};

export default function SubmitButton(props: SubmitButtonProps): JSX.Element {
  const { registerUserInfo, clearEmailAndPassword, errors, setErrors } = props;
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { email, password, passwordConfirm } = registerUserInfo;

  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const passwordConfirmError = validatePasswordConfirm(password, passwordConfirm);
    if (Boolean(emailError || passwordError || passwordConfirmError)) {
      setErrors({ ...errors, email: emailError, password: passwordError, passwordConfirm: passwordConfirmError });
      return;
    }

    setIsSubmitting(true);
    requestRegister(registerUserInfo)
      .then((res: AxiosResponse) => {
        alert('회원가입 성공!');
      })
      .catch((err: AxiosError) => {
        alert(err.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {Boolean(errors.submit) && (
        <Grid item xs={12}>
          <FormHelperText error>{errors.submit}</FormHelperText>
        </Grid>
      )}
      <Grid item xs={12}>
        {/* <AnimateButton> */}
        <Button
          disableElevation
          disabled={isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleLoginButtonClick}
        >
          Register
        </Button>
        {/* </AnimateButton> */}
      </Grid>
    </>
  );
}
