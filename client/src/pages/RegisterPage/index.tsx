import { Grid } from '@mui/material';
import EmailInput from './EmailInput';
import RegisterHeader from './RegisterHeader';
import React from 'react';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';
import { Role, RoleOption } from 'Interface/User';
import PasswordConfirmInput from './PasswordConfirmInput';
import RoleSelect from './RoleSelect';

const RegisterPage = () => {
  // consts
  const INIT_ERRORS_STATE = {
    email: '',
    password: '',
    passwordConfirm: '',
    submit: '',
  };

  // states
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [role, setRole] = React.useState<Role>('PI');
  const [roleOption, setRoleOption] = React.useState<RoleOption>({
    isRadiologist: false,
    experience: '',
  });
  const [errors, setErrors] = React.useState(INIT_ERRORS_STATE);

  // functions
  const clearEmailAndPassword = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RegisterHeader />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <EmailInput email={email} setEmail={setEmail} errors={errors} setErrors={setErrors} />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput
              password={password}
              passwordConfirm={passwordConfirm}
              setPassword={setPassword}
              errors={errors}
              setErrors={setErrors}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordConfirmInput
              password={password}
              passwordConfirm={passwordConfirm}
              setPasswordConfirm={setPasswordConfirm}
              errors={errors}
              setErrors={setErrors}
            />
          </Grid>
          <Grid item xs={12}>
            <RoleSelect role={role} setRole={setRole} roleOption={roleOption} setRoleOption={setRoleOption} />
          </Grid>
          <Grid item xs={12}>
            <SubmitButton
              email={email}
              password={password}
              passwordConfirm={passwordConfirm}
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

export default RegisterPage;
