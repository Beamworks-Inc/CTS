import { Project } from 'Interface/User';

type ProjectListItemOmitted = 'data' | 'form';
export interface ProjectListItem extends Omit<Project, ProjectListItemOmitted> {}

export interface ProjectListDataGridProps {
  data: Array<ProjectListItem>;
}
