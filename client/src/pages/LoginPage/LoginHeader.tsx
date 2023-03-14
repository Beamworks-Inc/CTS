import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
      <Typography variant="h3">Login</Typography>
      <Typography component={Link} to={'/register'} variant="body1" sx={{ textDecoration: 'none' }} color="success">
        Register
      </Typography>
    </Stack>
  );
};

export default LoginHeader;
