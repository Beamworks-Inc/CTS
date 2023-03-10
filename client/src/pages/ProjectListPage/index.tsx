import React from 'react';
import { User } from '../../Interface/User';
import DatagridHeader from './DatagridHeader';
import ProjectListDataGrid from './ProjectListDataGrid';

interface ProjectListPageProps {
  user: User;
}
const ProjectListPage = (props: ProjectListPageProps) => {
  const loadProjectList = () => {};
  // 역할이 PI, Researcher 인 경우 프로젝트 생성 버튼이 존재해야 한다.
  // 프로젝트 관리 페이지에 접속하면 사용자는 자신과 관련된 프로젝트를 다운로드 해야한다.
  return (
    <DatagridHeader>
      <ProjectListDataGrid />
    </DatagridHeader>
  );
};

export default ProjectListPage;
