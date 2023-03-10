import React from 'react';
import { useNavigate } from 'react-router-dom';
import DatagridHeader from './DatagridHeader';
import ProjectListDataGrid from './ProjectListDataGrid';
import useLoading from 'hooks/useLoading';

const ProjectListPage = () => {
  const loadProjectList = () => {
    // TODO: Project-List 받아오는 API 연결!
  };

  const navigate = useNavigate();
  const [loadingState, fetchData] = useLoading(loadProjectList, []);
  const { loading, error, data } = loadingState;

  if (loading) return <div>Loading...</div>;
  if (error) navigate('/error');

  return (
    <DatagridHeader>
      <ProjectListDataGrid data={data} />
    </DatagridHeader>
  );
};

export default ProjectListPage;
