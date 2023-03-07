import { Grid, Stack, Typography } from '@mui/material';
import EmailAndPasswordForm from './EmailAndPasswordForm';
import LoginHeader from './LoginHeader';

const LoginPage = () => {
  const onLoginButtonClick = () => {};

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <LoginHeader />
      </Grid>
      <Grid item xs={12}>
        <EmailAndPasswordForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
