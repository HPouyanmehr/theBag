// react
import * as React from "react";
// @mui
import { Grid, GridProps } from "@mui/material";
import { styled } from "@mui/material/styles";
// type
interface ICenterGridItemProps extends GridProps {}

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
}));

const CenterGridItem: React.FunctionComponent<ICenterGridItemProps> = (
  props
) => {
  const { children, container, item, ...otherProps } = props;
  return (
    <CustomGridItem item {...otherProps}>
      {children}
    </CustomGridItem>
  );
};

export default CenterGridItem;
