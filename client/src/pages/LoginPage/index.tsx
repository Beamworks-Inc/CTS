import { Grid } from '@mui/material';
import EmailInput from './EmailInput';
import LoginHeader from './LoginHeader';
import React from 'react';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginPage = () => {
  // consts
  const INIT_ERRORS_STATE = {
    email: '',
    password: '',
    submit: '',
  };

  // states
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState(INIT_ERRORS_STATE);

  // functions
  const clearEmailAndPassword = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <LoginHeader />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <EmailInput email={email} setEmail={setEmail} errors={errors} setErrors={setErrors} />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput password={password} setPassword={setPassword} errors={errors} setErrors={setErrors} />
          </Grid>
          <Grid item xs={12}>
            <SubmitButton
              email={email}
              password={password}
              clearEmailAndPassword={clearEmailAndPassword}
              errors={errors}
              setErrors={setErrors}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
