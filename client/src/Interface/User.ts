import { FormComponent } from 'pages/ProjectCreatePage';

export type Role = 'PI' | 'REVIEWER' | 'RESEARCHER';
export type RadioligistOption = 'yes' | 'no' | 'trainee';

export type ReviewerRoleOption = {
  isRadiologist: RadioligistOption;
  hasMoreThan3YearsOfExperience: boolean;
};

export interface LoginUserInfo {
  username: string;
  password: string;
}
export interface LoginForm {
  auth: LoginUserInfo;
}
/**
 * RegisterForm는 PI와 Researcher가 등록할 때 사용한다.
 */
export interface RegisterForm {
  email: string;
  password: string;
}
export interface ReviewerRegisterForm extends RegisterForm {
  info?: ReviewerRoleOption;
}
export interface RegisterUserInfo extends ReviewerRegisterForm {
  role: Role;
  passwordConfirm: string;
}

export interface User {
  id: number;
  email: string;
  role: Role;
}

export interface PI extends User {
  role: 'PI';
  projectIds: number[];
}

interface ReviewerInfo {
  isRadiologist: 'Yes' | 'No' | 'Trainee';
  hasMoreThan3YearsOfExperience: boolean;
}

export interface Reviewer extends User {
  role: 'REVIEWER';
  info: ReviewerInfo;
}

export interface Researcher extends User {
  role: 'RESEARCHER';
  projectIds: number[];
}

export interface Data {
  id: number | null;
  originalFile: File;
  reportFile: File;
}

export interface InitProject {
  name: string;
  description: string;
  reviewData: Data[];
  form: FormComponent;
}

export interface Project extends InitProject {
  id: number;
  pi: PI | null;
  researcher: Researcher;
  reviewers: Reviewer[];
}

export interface Alarm {
  projectId: number;
  piId: number;
}

export interface Review {
  id: number;
  projectId: number;
  reviewerId: number;
  dataId: number;
  value: object;
}
