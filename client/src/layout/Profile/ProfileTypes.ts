import { User } from 'Interface/User';
import { ReactNode } from 'react';

export interface ProfileHeaderProps {
  user: User;
  handleLogout: () => void;
}

export interface ProfileTabsProps {}

export interface ProfileTabProps {
  handleLogout: () => void;
}

export interface ListItem {
  text: string;
  icon: JSX.Element;
  onClick: (...args: any[]) => any | void;
}
