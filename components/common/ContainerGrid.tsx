// react
import * as React from 'react';
// @mui
import { Grid, GridProps } from '@mui/material';
// type
interface ContainerGridProps extends GridProps {}

const ContainerGrid: React.FunctionComponent<ContainerGridProps> = (props) => {
  const { children, container, spacing, ...otherProps } = props;

  return (
    <Grid container spacing={2} {...otherProps}>
      {children}
    </Grid>
  );
};

export default ContainerGrid;
