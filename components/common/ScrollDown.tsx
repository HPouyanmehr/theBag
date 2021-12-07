// react
import * as React from 'react';
// @mui
import { Box, BoxProps, styled } from '@mui/material';
// custom icon
import ArrowDownIcon from 'components/icon/ArrowDown';
// style
import styles from 'styles/components/ScrollDown.module.css';
// type
import { Property } from 'csstype';
interface ScrollDownProps extends BoxProps {
  color?: Property.Color;
}

const AnimationContainer = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

const ScrollDown: React.FunctionComponent<ScrollDownProps> = (props) => {
  const { color = 'inherit', ...otherProps } = props;

  return (
    <AnimationContainer {...otherProps}>
      <div className={styles.scrollDown}>
        <ArrowDownIcon
          aria-label="Arrow down icon"
          stroke={color}
          strokeWidth="0.3rem"
          fontSize="large"
        />
      </div>
    </AnimationContainer>
  );
};

export default ScrollDown;
