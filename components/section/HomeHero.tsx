// react
import * as React from 'react';
// @mui
import { Typography } from '@mui/material';
// custom components
import CenterBox from 'components/common/CenterBox';
import TypingEffect from 'components/common/TypingEffect';
// type
interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  return (
    <CenterBox flexDirection="column">
      <Typography component="p" variant="h5">
        Hello, I am
      </Typography>
      <Typography component="h1" variant="h2" fontWeight="bold">
        John Doe
      </Typography>
      <TypingEffect staticText="I am" text={['photographer', 'desiner']} />
    </CenterBox>
  );
};

export default HomeHero;
