// react
import * as React from 'react';
// @mui
import { Container } from '@mui/material';
// type
interface MainLayoutProps {}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  const { children } = props;

  return <Container maxWidth="lg">{children}</Container>;
};

export default MainLayout;
