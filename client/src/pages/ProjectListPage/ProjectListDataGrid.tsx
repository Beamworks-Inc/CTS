import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProjectListDataGridProps, ProjectListItem } from './ProjectListTypes';

const CONSTS = {
  DEFAULT_NO_PI: 'NO PI YET',
};

export default function ProjectListDataGrid(props: ProjectListDataGridProps) {
  const { data } = props; // TODO: Test.
  const rows: Array<ProjectListItem> = [
    {
      id: 1,
      name: 'Project 1',
      description: 'This is a description of project 1',
      pi: {
        id: 1,
        name: 'PI 1',
        email: 'pi@gmail.com',
        role: 'PI',
        projectIds: [1, 2, 3],
      },
      researcher: {
        id: 2,
        name: 'RESEARCHER 1',
        email: 'researcher@gmail.com',
        role: 'RESEARCHER',
        projectIds: [1, 2, 3],
      },
      reviewer: [
        {
          id: 3,
          name: 'REVIEWER 1',
          email: 'reviewer@gmail.com',
          role: 'REVIEWER',
          info: {
            isRadiologist: 'Yes',
            hasMoreThan3YearsOfExperience: true,
          },
        },
        {
          id: 3,
          name: 'REVIEWER 1',
          email: 'reviewer@gmail.com',
          role: 'REVIEWER',
          info: {
            isRadiologist: 'Yes',
            hasMoreThan3YearsOfExperience: true,
          },
        },
      ],
    },
  ];

  return (
    <TableContainer>
      <Table sx={{ minWidth: 560 }}>
        <TableHead>
          <TableRow>
            <TableCell width="1">Id</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Researcher</TableCell>
            <TableCell>PI</TableCell>
            <TableCell>Attending Reviewers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow hover key={index}>
              {/* Id */}
              <TableCell align="center">
                <Typography variant="subtitle1">{row.id}</Typography>
              </TableCell>

              {/* Description */}
              <TableCell>
                <Typography align="left" variant="subtitle1">
                  <Link to={`/${row.id}`}>{row.name}</Link>
                </Typography>
                <Typography align="left" variant="caption" color="secondary">
                  {row.description}
                </Typography>
              </TableCell>

              {/* Researcher */}
              <TableCell>
                <Typography align="left" variant="subtitle1">
                  {row.researcher.name}
                </Typography>
                <Typography align="left" variant="caption" color="secondary">
                  {row.researcher.email}
                </Typography>
              </TableCell>

              {/* PI */}
              <TableCell>
                {row.pi !== null ? (
                  <>
                    <Typography align="left" variant="subtitle1">
                      {row.pi.name}
                    </Typography>
                    <Typography align="left" variant="caption" color="secondary">
                      {row.pi.email}
                    </Typography>
                  </>
                ) : (
                  <Typography align="left" variant="subtitle1">
                    {CONSTS.DEFAULT_NO_PI}
                  </Typography>
                )}
              </TableCell>

              {/* Reviewers */}
              <TableCell>
                <Typography align="left" variant="caption">
                  {row.reviewer.map(reviewer => reviewer.name).join(', ')}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
