// react
import * as React from 'react';
// @mui
import { Container, ContainerProps } from '@mui/material';

const CustomContainer: React.FunctionComponent<ContainerProps> = (props) => {
  const { children, maxWidth = 'lg', ...otherProps } = props;

  return (
    <Container maxWidth={maxWidth} {...otherProps}>
      {children}
    </Container>
  );
};

export default CustomContainer;
