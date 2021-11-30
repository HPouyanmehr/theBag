// react
import * as React from 'react';
// @mui
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@mui/material';
// type
interface SkillProgressProps extends CircularProgressProps {
  Icon: React.ReactNode;
  subtitle?: string;
}

const SkillProgress: React.FunctionComponent<SkillProgressProps> = (props) => {
  const { subtitle, Icon, ...otherProps } = props;
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" {...otherProps} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Icon}
          </Box>
        </Box>
        {subtitle && (
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ marginTop: '0.5rem' }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default SkillProgress;
