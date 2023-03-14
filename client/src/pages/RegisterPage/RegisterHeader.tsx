import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterHeader = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
      <Typography variant="h3">Register</Typography>
      <Typography component={Link} to={'/login'} variant="body1" sx={{ textDecoration: 'none' }} color="success">
        Login
      </Typography>
    </Stack>
  );
};

export default RegisterHeader;
