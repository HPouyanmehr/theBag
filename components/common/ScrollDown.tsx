// react
import * as React from 'react';
// @mui
import { Box, BoxProps, styled, useTheme } from '@mui/material';
// custom icon
import ArrowDownIcon from 'components/icon/arrow-down';
// style
import styles from 'styles/components/ScrollDown.module.css';
// type
interface ScrollDownProps extends BoxProps {}

const AnimationContainer = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

const ScrollDown: React.FunctionComponent<ScrollDownProps> = (props) => {
  const { palette } = useTheme();

  return (
    <AnimationContainer {...props}>
      <div className={styles.scrollDown}>
        <ArrowDownIcon
          stroke={palette.primary.main}
          strokeWidth="0.3rem"
          fontSize="large"
        />
      </div>
    </AnimationContainer>
  );
};

export default ScrollDown;
