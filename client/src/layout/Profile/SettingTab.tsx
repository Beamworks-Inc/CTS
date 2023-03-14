import { useState } from 'react';

// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ListItem } from './ProfileTypes';

const SettingTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleListItemClick = (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedIndex(index);
    // TODO: implement 개발자 연락처 모달
  };

  const listItems: ListItem[] = [
    {
      text: 'Support',
      icon: <QuestionCircleOutlined />,
      onClick: handleListItemClick,
    },
  ];

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      {listItems.map((item, index) => (
        <ListItemButton key={index} selected={selectedIndex === index} onClick={item.onClick(index)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default SettingTab;
