export type Role = 'PI' | 'REVIEWER' | 'RESEARCHER';

export interface LoginForm{
    email: string;
    password: string;
}

export interface RegisterForm{
    email: string;
    password: string;
    role: Role;
}

export interface User {
    id: number;
    email: string;
    name: string;
    role: Role
}

export interface PI extends User{
    role: 'PI';
    projectIds: number[];
}

interface ReviewerInfo{
    isRadiologist : 'Yes' | 'No' | 'Trainee'
    hasMoreThan3YearsOfExperience : boolean
}

export interface Reviewer extends User{
    role: 'REVIEWER';
    info: ReviewerInfo;
}

export interface Researcher extends User{
    role: 'RESEARCHER';
    projectIds: number[];
}

export interface Project{
    projectId: number;
    name: string;
    description: string;
    pi: PI;
    reviewers: Reviewer[];
    researchers: Researcher;
}

