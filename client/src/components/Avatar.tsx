import { Avatar } from '@mui/material';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name.length >= 4 ? name.split('@')[0].slice(0, 4) : name.split('@')[0],
  };
}

interface AvatarProps {
  name: string;
}

export default function MyAvatar(props: AvatarProps) {
  const { name } = props;

  return <Avatar {...stringAvatar(name)} />;
}
