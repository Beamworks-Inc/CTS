import { LoginUserInfo } from 'Interface/User';

type LoginErrors = {
  email: string;
  password: string;
  submit: string;
};

export type EmailInputProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  errors: LoginErrors;
  setErrors: React.Dispatch<React.SetStateAction<LoginErrors>>;
};

export type PasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  errors: LoginErrors;
  setErrors: React.Dispatch<React.SetStateAction<LoginErrors>>;
};

export type SubmitButtonProps = {
  loginUserInfo: LoginUserInfo;
  clearEmailAndPassword: () => void;
  errors: LoginErrors;
  setErrors: React.Dispatch<React.SetStateAction<LoginErrors>>;
};
