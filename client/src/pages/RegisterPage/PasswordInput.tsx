import { FormHelperText, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import React from 'react';
import { validatePasswordConfirm } from './PasswordConfirmInput';
import { PasswordInputProps } from './RegisterTypes';

const PASSWORD_ERRORS = {
  required: '비밀번호는 필수입니다.',
  valid: '',
};

export function validatePassword(value: string): string {
  if (value === '') {
    return PASSWORD_ERRORS.required;
  } else {
    return PASSWORD_ERRORS.valid;
  }
}

export default function PasswordInput(props: PasswordInputProps): JSX.Element {
  const { password, passwordConfirm, setPassword, errors, setErrors } = props;
  const [capsWarning, setCapsWarning] = React.useState(false);

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const passwordError = validatePassword(event.target.value);
    const passwordConfirmError = validatePasswordConfirm(event.target.value, passwordConfirm);
    setErrors({ ...errors, password: passwordError, passwordConfirm: passwordConfirmError });
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

  return (
    <Stack spacing={1}>
      <InputLabel htmlFor="password-login">비밀번호</InputLabel>
      <OutlinedInput
        fullWidth
        color={capsWarning ? 'warning' : 'primary'}
        error={Boolean(errors.password)}
        id="password-login"
        name="password"
        placeholder="****"
        type="password"
        value={password}
        onChange={handlePasswordInputChange}
        onKeyDown={handlePasswordInputKeyDown}
        onBlur={handlePasswordInputBlur}
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
  );
}
