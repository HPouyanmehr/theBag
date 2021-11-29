// react
import * as React from 'react';
// @mui
import { Typography } from '@mui/material';
// custom components
import CenterBox from 'components/common/CenterBox';
// type
interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  return (
    <CenterBox flexDirection="column">
      <Typography component="p" variant="h6">
        Hello, I am
      </Typography>
      <Typography component="h1" variant="h3" fontWeight="bold">
        John Doe
      </Typography>
    </CenterBox>
  );
};

export default HomeHero;
