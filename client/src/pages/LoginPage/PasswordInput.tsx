import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { PasswordInputProps } from './LoginTypes';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

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
  const { password, setPassword, errors, setErrors } = props;
  const [capsWarning, setCapsWarning] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

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

  return (
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
  );
}
