import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import React from 'react';
import { validateEmail, validatePassword } from './utils';
import { login } from './LoginAPI';
import { LoginForm, User } from 'Interface/User';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const EmailAndPassword = () => {
  // consts
  const INIT_ERRORS_STATE = {
    email: '',
    password: '',
    submit: '',
  };

  // states
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [capsWarning, setCapsWarning] = React.useState(false);
  const [errors, setErrors] = React.useState(INIT_ERRORS_STATE);

  // hooks
  const navigate = useNavigate();

  // handlers
  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const emailError = validateEmail(event.target.value);
    setErrors({ ...errors, email: emailError });
  };

  const handleEmailInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setErrors({ ...errors, submit: '' });
  };

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const passwordError = validatePassword(event.target.value);
    setErrors({ ...errors, password: passwordError });
  };

  const handlePasswordInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (Boolean(event.getModifierState('CapsLock'))) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
    setErrors({ ...errors, submit: '' });
  };

  const handlePasswordInputBlur = () => {
    setCapsWarning(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        setErrors(INIT_ERRORS_STATE);
        setIsSubmitting(false);
        navigate('/project-list');
      })
      .catch((err: AxiosError) => {
        // TODO: 얼럿트 대신 컴포넌트 사용!
        console.log(err);
        alert('실패', err.message);
        setEmail('');
        setPassword('');
        setErrors({ ...errors, submit: '유효한 아이디와 비밀번호를 입력해주세요.' });
        setIsSubmitting(false);
      });
  };

  return (
    <Grid container spacing={3}>
      {/* 이메일 */}
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor="email-login">이메일 주소</InputLabel>
          <OutlinedInput
            id="email-login"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailInputChange}
            onKeyDown={handleEmailInputKeyDown}
            placeholder="이메일 주소를 입력하세요."
            fullWidth
            error={Boolean(errors.email)}
          />
          {Boolean(errors.email) && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.email}
            </FormHelperText>
          )}
        </Stack>
      </Grid>

      {/* 비밀번호 */}
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor="password-login">비밀번호</InputLabel>
          <OutlinedInput
            fullWidth
            color={capsWarning ? 'warning' : 'primary'}
            error={Boolean(errors.password)}
            id="-password-login"
            name="password"
            placeholder="비밀번호를 입력하세요."
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordInputChange}
            onKeyDown={handlePasswordInputKeyDown}
            onBlur={handlePasswordInputBlur}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end" color="secondary">
                  {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </IconButton>
              </InputAdornment>
            }
          />
          {capsWarning && (
            <Typography variant="caption" sx={{ color: 'warning.main' }} id="warning-helper-text-password-login">
              CapsLock을 해제해 주세요!
            </Typography>
          )}
          {Boolean(errors.password) && (
            <FormHelperText error id="standard-weight-helper-text-password-login">
              {errors.password}
            </FormHelperText>
          )}
        </Stack>
      </Grid>

      {/* 제출 버튼 */}
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
    </Grid>
  );
};

export default EmailAndPassword;
