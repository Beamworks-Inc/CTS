import { Box, Tab, Tabs } from '@mui/material';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';
import { SyntheticEvent, useState } from 'react';

const tabStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'capitalize',
};

export default function ProfileContent(props: any) {
  const [currentTab, setCurrentTab] = useState(0);
  const { handleLogout } = props;

  const handleChange = (event: SyntheticEvent, index: number) => {
    setCurrentTab(index);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={currentTab} onChange={handleChange}>
          <Tab
            sx={tabStyles}
            icon={<UserOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
            label="Profile"
          />
          <Tab
            sx={tabStyles}
            icon={<SettingOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
            label="Setting"
          />
        </Tabs>
      </Box>
      {currentTab === 0 ? <ProfileTab handleLogout={handleLogout} /> : <SettingTab />}
    </>
  );
}
