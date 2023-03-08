import { Role, RoleOption } from 'Interface/User';

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
  roleOption: RoleOption;
  setRoleOption: React.Dispatch<React.SetStateAction<RoleOption>>;
};

export type SubmitButtonProps = {
  email: string;
  password: string;
  passwordConfirm: string;
  clearEmailAndPassword: () => void;
  errors: RegisterErrors;
  setErrors: React.Dispatch<React.SetStateAction<RegisterErrors>>;
};
