import React from 'react';
import { useNavigate } from 'react-router-dom';
import DatagridHeader from './DatagridHeader';
import ProjectListDataGrid from './ProjectListDataGrid';
import useLoading from 'hooks/useLoading';
import Loader from 'components/Loader';
import {getProjects} from "./ProjectListAPI";

const ProjectListPage = () => {
  const loadProjectList = () => {
    return getProjects();
  };

  const navigate = useNavigate();
  const [loadingState, fetchData] = useLoading(loadProjectList, []);
  const { loading, error, data } = loadingState;

  // if (loading) return <Loader />;
  // if (error) navigate('/error');

  return (
    <DatagridHeader>
      <ProjectListDataGrid data={data} />
    </DatagridHeader>
  );
};

export default ProjectListPage;
