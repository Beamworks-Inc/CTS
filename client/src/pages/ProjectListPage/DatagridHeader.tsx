import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function DatagridHeader(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Container>
      <Stack direction="column" spacing="0">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Project List</Typography>
          <Box>
            <Button color="success" variant="contained">
              Create
            </Button>
          </Box>
        </Stack>
        <Box>{children}</Box>
      </Stack>
    </Container>
  );
}
