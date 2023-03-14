import { Box, Fade, Grow } from '@mui/material';
import { ReactNode } from 'react';
import { forwardRef } from 'react';

interface TransistionsProps {
  type: string;
  children: ReactNode;
}

const positionSX = {
  transformOrigin: '0 0 0',
};

const fadeOptions = {
  timeout: {
    appear: 0,
    enter: 300,
    exit: 150,
  },
};

export default forwardRef(function Transitions(props: TransistionsProps, ref: any) {
  const { type = 'grow', children, ...others } = props;

  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}
      {type === 'fade' && (
        <Fade {...others} {...fadeOptions}>
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}
    </Box>
  );
});
