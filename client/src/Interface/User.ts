import { FormComponent } from '../pages/ProjectCreatePage';

export type Role = 'PI' | 'REVIEWER' | 'RESEARCHER';

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  role: Role;
}

export interface User {
  id: number;
  email: string;
  name: string;
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
  data: Data[];
  form: FormComponent;
}

export interface Project extends InitProject {
  id: number;
  pi: PI | null;
  researcher: Researcher | null;
  reviewer: Reviewer[];
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
