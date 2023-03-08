import { Button, FormHelperText, Grid } from '@mui/material';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginForm, User } from 'Interface/User';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './EmailInput';
import { login } from './LoginAPI';
import { SubmitButtonProps } from './LoginTypes';
import { validatePassword } from './PasswordInput';

export default function SubmitButton(props: SubmitButtonProps): JSX.Element {
  const { email, password, clearEmailAndPassword, errors, setErrors } = props;
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (Boolean(emailError || passwordError)) {
      setErrors({ ...errors, email: emailError, password: passwordError });
      return;
    }

    setIsSubmitting(true);
    const loginForm: LoginForm = {
      auth: {
        username: email,
        password: password,
      },
    };

    login(loginForm)
      .then((res: AxiosResponse<User>) => {
        // TODO: res.data(User)를 state에 저장 해두어야함.
        console.log('로그인성공', res.data);
        alert('로그인성공!');
        setIsSubmitting(false);
        navigate('/project-list');
      })
      .catch((err: AxiosError) => {
        // TODO: 얼럿트 대신 컴포넌트 사용!
        console.log(err);
        alert(err.message);
        clearEmailAndPassword();
        setErrors({ ...errors, submit: '유효한 아이디와 비밀번호를 입력해주세요.' });
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
          Login
        </Button>
        {/* </AnimateButton> */}
      </Grid>
    </>
  );
}
