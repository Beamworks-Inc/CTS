import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import { ProjectListDataGridProps, ProjectListItem } from './ProjectListTypes';

const CONSTS = {
  DEFAULT_NO_PI: 'NO PI YET',
  DEFAULT_NO_REVIEWERS: 'NO REVIEWERS YET',
};

function NoData() {
  return (
    <TableRow>
      <TableCell colSpan={6} align="center">
        No Data
      </TableCell>
    </TableRow>
  );
}

export default function ProjectListDataGrid(props: ProjectListDataGridProps) {
  const { data } = props;
  console.log(data);
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
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow hover key={index}>
                {/* Id */}
                <TableCell align="center">
                  <Typography variant="subtitle1">{row.id}</Typography>
                </TableCell>

                {/* Description */}
                <TableCell>
                  <Typography align="left" variant="subtitle1">
                    <Link to={`${row.id}`}>{row.name}</Link>
                  </Typography>
                  <Typography align="left" variant="caption" color="secondary">
                    {row.description}
                  </Typography>
                </TableCell>

                {/* Researcher */}
                <TableCell>
                  <Typography align="left" variant="subtitle1">
                    {row.researcher.email}
                  </Typography>
                </TableCell>

                {/* PI */}
                <TableCell>
                  <Typography align="left" variant="subtitle1">
                    {row.pi !== null ? row.pi.email : CONSTS.DEFAULT_NO_PI}
                  </Typography>
                </TableCell>

                {/* Reviewers */}
                <TableCell>
                  <Typography align="left" variant="caption">
                    {row.reviewers.length > 0
                      ? row.reviewers.map(reviewer => reviewer.email).join(', ')
                      : CONSTS.DEFAULT_NO_REVIEWERS}
                  </Typography>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <NoData />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
