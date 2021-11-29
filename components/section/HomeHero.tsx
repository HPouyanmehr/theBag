// react
import * as React from 'react';
// @mui
import { Typography } from '@mui/material';
// custom components
import CenterBox from 'components/common/CenterBox';
import TypingEffect from 'components/common/TypingEffect';
import ScrollDown from 'components/common/ScrollDown';
// type
interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  return (
    <CenterBox flexDirection="column">
      <Typography component="p" variant="h5">
        Hello, I am
      </Typography>
      <Typography component="h1" variant="h2" color="primary" fontWeight="bold">
        John Doe
      </Typography>
      <TypingEffect staticText="I am" text={['photographer', 'designer']} />
      <ScrollDown
        sx={{
          bottom: '10%',
          cursor: 'pointer',
          position: 'absolute',
        }}
      />
    </CenterBox>
  );
};

export default HomeHero;
