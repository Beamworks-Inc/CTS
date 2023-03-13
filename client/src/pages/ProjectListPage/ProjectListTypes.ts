import { Project } from 'Interface/User';

type ProjectListItemOmitted = 'reviewData' | 'form';
export interface ProjectListItem extends Omit<Project, ProjectListItemOmitted> {}

export interface ProjectListDataGridProps {
  data: Array<ProjectListItem>;
}
