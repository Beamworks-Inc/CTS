import { FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import React from 'react';
import { EmailInputProps } from './RegisterTypes';

const emailValidate = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const EMAIL_ERRORS = {
  required: '이메일은 필수입니다.',
  invalid: '이메일 형식이 올바르지 않습니다.',
  valid: '',
};

export function validateEmail(value: string): string {
  if (value === '') {
    return EMAIL_ERRORS.required;
  } else if (!emailValidate(value)) {
    return EMAIL_ERRORS.invalid;
  } else {
    return EMAIL_ERRORS.valid;
  }
}

export default function EmailInput(props: EmailInputProps): JSX.Element {
  const { email, setEmail, errors, setErrors } = props;

  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const emailError = validateEmail(event.target.value);
    setErrors({ ...errors, email: emailError });
  };

  const handleEmailInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (errors.submit !== '') setErrors({ ...errors, submit: '' });
  };

  return (
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
  );
}
