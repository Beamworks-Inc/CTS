import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import Search from './Search';
import Notification from './Notification';
import Profile from './Profile';

import { HeaderProps } from './LayoutProps';

export default function Header(props: HeaderProps) {
  const { open, handleDrawerToggle } = props;
  const HeaderContent = () => {
    return (
      <>
        {/* 현재 사용하지 않음 */}
        {/* <Search /> */}

        <Box sx={{ width: '100%', ml: 1 }} />

        {/* 현재 사용하지 않음 - 기획변경 */}
        {/* <Notification /> */}

        {/* TODO: Localization & Dark Theme etc */}
        {/* <Customization />  */}

        <Profile />
      </>
    );
  };

  return (
    <AppBar>
      <Toolbar>
        <HeaderContent></HeaderContent>
      </Toolbar>
    </AppBar>
  );
}
