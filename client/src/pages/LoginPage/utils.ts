export const emailValidate = (email: string) => {
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
