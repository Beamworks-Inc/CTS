import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  // TODO: make it using redux
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {};

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      {/* <Drawer open={open} handleDrawerToggle={handleDrawerToggle} /> */}
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        <Box sx={{ position: 'relative', minHeight: 'calc(100vh - 110px)', display: 'flex', flexDirection: 'column' }}>
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
