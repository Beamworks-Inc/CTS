import { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { LogoutOutlined } from '@ant-design/icons';
import { ListItem, ProfileTabProps } from './ProfileTypes';

const listStyle = { p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } };

const ProfileTab = (props: ProfileTabProps) => {
  const { handleLogout } = props;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleListItemClick = (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedIndex(index);
  };

  const listItems: ListItem[] = [
    {
      text: 'Logout',
      icon: <LogoutOutlined />,
      onClick: () => handleLogout,
    },
  ];

  return (
    <List component="nav" sx={listStyle}>
      {listItems.map((item, index) => (
        <ListItemButton key={index} selected={selectedIndex === index} onClick={item.onClick(index)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default ProfileTab;
