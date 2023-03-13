import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DatagridHeader(props: { children: React.ReactNode }) {
  const { children } = props;

  const navigate = useNavigate();

  const user = {
    role: 'RESEARCHER',
  }; // TODO: make it by hooks

  const handleCreateButtonClick = () => {
    navigate('/project/create');
  };

  return (
    <Container>
      <Stack direction="column" spacing="0">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Project List</Typography>
          <Box>
            {/* 연구원을 위한 프로젝트 생성 버튼 */}
            {user.role === 'RESEARCHER' && (
              <Button color="success" variant="contained" onClick={handleCreateButtonClick}>
                Create
              </Button>
            )}
            {/* PI를 위한 프로젝트 추가 버튼 */}
            {user.role === 'PI' && (
              <Button color="success" variant="contained">
                Append
              </Button>
            )}
          </Box>
        </Stack>
        <Box>{children}</Box>
      </Stack>
    </Container>
  );
}
