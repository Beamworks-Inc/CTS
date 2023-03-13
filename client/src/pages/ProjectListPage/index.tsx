import React from 'react';
import { Navigate } from 'react-router-dom';
import DatagridHeader from './DatagridHeader';
import ProjectListDataGrid from './ProjectListDataGrid';
import useLoading from 'hooks/useLoading';
import Loader from 'components/Loader';
import { getProjects } from './ProjectListAPI';
import { ProjectListItem } from './ProjectListTypes';
import { Project } from 'Interface/User';

function convert(data: Project[]): ProjectListItem[] {
  if (!data) return [];
  return data.map(project => ({
    id: project.id,
    name: project.name,
    description: project.description,
    pi: project.pi,
    researcher: project.researcher,
    reviewers: project.reviewers,
  }));
}

const ProjectListPage = () => {
  const [loadingState, fetchData] = useLoading(getProjects, []);
  const { loading, error, data } = loadingState;

  if (loading) return <Loader />;
  if (error) return <Navigate to="/error" replace />;

  return (
    <DatagridHeader>
      <ProjectListDataGrid data={convert(data)} />
    </DatagridHeader>
  );
};

export default ProjectListPage;
