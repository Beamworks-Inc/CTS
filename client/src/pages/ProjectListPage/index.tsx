import React from 'react';
import { User } from '../../Interface/User';
import ProjectListDataGrid from './ProjectListDataGrid';

interface ProjectListPageProps {
  user: User;
}
const ProjectListPage = (props: ProjectListPageProps) => {
  const loadProjectList = () => {};
  return <ProjectListDataGrid />;
};

export default ProjectListPage;
