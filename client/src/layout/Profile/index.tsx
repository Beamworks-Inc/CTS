// react
import { useRef, useState } from 'react';

// material-ui
import { Box, ButtonBase, ClickAwayListener, Paper, Popper, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/Transitions';
import Avatar from 'components/Avatar';
import { User } from 'Interface/User';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';

// consts
const popperOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
  ],
};

const paperStyles = {
  width: 290,
  minWidth: 240,
  maxWidth: 290,
};

const buttonBaseStyle = {
  p: 0.25,
  borderRadius: 1,
};

const Profile = () => {
  // states
  const user = { name: 'Test', role: 'REVIEWER' as User['role'] };

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  // handlers
  const handleLogout = () => {
    // TODO: API Connection (May be async)
    alert('logout');
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      {/* Profile Button */}
      <ButtonBase sx={buttonBaseStyle} ref={anchorRef} onClick={handleToggle}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar name={user.name} />
          <Typography variant="subtitle1">{user.name}</Typography>
        </Stack>
      </ButtonBase>

      {/* Profile Popup (Popper) */}
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        popperOptions={popperOptions}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" in={open} {...TransitionProps}>
            {open && (
              <Paper sx={paperStyles}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MainCard elevation={0} border={false} content={false}>
                    <ProfileHeader user={{ ...user, email: 'test', id: 0 }} handleLogout={handleLogout} />
                    <ProfileContent handleLogout={handleLogout} />
                  </MainCard>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
