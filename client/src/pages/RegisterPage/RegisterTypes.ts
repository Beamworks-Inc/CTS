import { RegisterUserInfo, Role, ReviewerRoleOption } from 'Interface/User';

type RegisterErrors = {
  email: string;
  password: string;
  passwordConfirm: string;
  submit: string;
};

export type EmailInputProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  errors: RegisterErrors;
  setErrors: React.Dispatch<React.SetStateAction<RegisterErrors>>;
};

export type PasswordInputProps = {
  password: string;
  passwordConfirm: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  errors: RegisterErrors;
  setErrors: React.Dispatch<React.SetStateAction<RegisterErrors>>;
};

export type PasswordConfirmInputProps = {
  password: string;
  passwordConfirm: string;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
  errors: RegisterErrors;
  setErrors: React.Dispatch<React.SetStateAction<RegisterErrors>>;
};

export type RoleSelectProps = {
  role: Role;
  setRole: React.Dispatch<React.SetStateAction<Role>>;
  roleOption: ReviewerRoleOption;
  setRoleOption: React.Dispatch<React.SetStateAction<ReviewerRoleOption>>;
};

export type SubmitButtonProps = {
  registerUserInfo: RegisterUserInfo;
  clearEmailAndPassword: () => void;
  errors: RegisterErrors;
  setErrors: React.Dispatch<React.SetStateAction<RegisterErrors>>;
};
