// react
import * as React from "react";
// @mui
import { Grid, GridProps } from "@mui/material";
// type
interface ICustomGridProps extends GridProps {}

const CustomGrid: React.FunctionComponent<ICustomGridProps> = (props) => {
  const { children, container, item, spacing = 2, ...otherProps } = props;

  return (
    <Grid container spacing={spacing} {...otherProps}>
      {children}
    </Grid>
  );
};

export default CustomGrid;
