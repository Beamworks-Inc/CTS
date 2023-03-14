import { CardContent, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import Avatar from '../../components/Avatar';
import { LogoutOutlined } from '@ant-design/icons';
import { ProfileHeaderProps } from './ProfileTypes';

export default function ProfileHedaer(props: ProfileHeaderProps) {
  const { user, handleLogout } = props;

  return (
    <CardContent sx={{ px: 2.5, pt: 3 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Stack direction="row" spacing={1.25} alignItems="center">
            <Avatar name={user.name} />
            <Stack>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {user.role}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <Tooltip title="Logout">
            <IconButton size="large" sx={{ color: 'text.primary' }} onClick={handleLogout}>
              <LogoutOutlined />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </CardContent>
  );
}
