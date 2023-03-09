import { FormHelperText, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import React from 'react';
import { PasswordConfirmInputProps } from './RegisterTypes';

const PASSWORD_ERRORS = {
  required: '비밀번호 확인은 필수입니다.',
  unmatch: '비밀번호가 일치하지 않습니다.',
  valid: '',
};

export function validatePasswordConfirm(password: string, passwordConfirm: string): string {
  if (passwordConfirm === '') {
    return PASSWORD_ERRORS.required;
  } else if (password !== passwordConfirm) {
    return PASSWORD_ERRORS.unmatch;
  } else {
    return PASSWORD_ERRORS.valid;
  }
}

export default function PasswordConfirmInput(props: PasswordConfirmInputProps): JSX.Element {
  const { password, passwordConfirm, setPasswordConfirm, errors, setErrors } = props;
  const [capsWarning, setCapsWarning] = React.useState(false);

  const handlePasswordConfirmInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
    const passwordConfirmError = validatePasswordConfirm(password, event.target.value);
    setErrors({ ...errors, passwordConfirm: passwordConfirmError });
  };

  const handlePasswordConfirmInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (Boolean(event.getModifierState('CapsLock'))) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
    setErrors({ ...errors, submit: '' });
  };

  const handlePasswordConfirmInputBlur = () => {
    setCapsWarning(false);
  };

  return (
    <Stack spacing={1}>
      <InputLabel htmlFor="password-confirm-login">비밀번호확인</InputLabel>
      <OutlinedInput
        fullWidth
        color={capsWarning ? 'warning' : 'primary'}
        error={Boolean(errors.password)}
        id="password-confirm-login"
        name="password"
        placeholder="****"
        type="password"
        value={passwordConfirm}
        onChange={handlePasswordConfirmInputChange}
        onKeyDown={handlePasswordConfirmInputKeyDown}
        onBlur={handlePasswordConfirmInputBlur}
      />
      {capsWarning && (
        <Typography variant="caption" sx={{ color: 'warning.main' }} id="warning-helper-text-password-login">
          CapsLock을 해제해 주세요!
        </Typography>
      )}
      {Boolean(errors.passwordConfirm) && (
        <FormHelperText error id="standard-weight-helper-text-password-login">
          {errors.passwordConfirm}
        </FormHelperText>
      )}
    </Stack>
  );
}
