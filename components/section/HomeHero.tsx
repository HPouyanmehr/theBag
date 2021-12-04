// react
import * as React from 'react';
// @mui
import { Box, Typography } from '@mui/material';
// custom components
import CenterBox from 'components/common/CenterBox';
import TypingEffect from 'components/common/TypingEffect';
import ScrollDown from 'components/common/ScrollDown';
// type
interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  return (
    <CenterBox flexDirection="column">
      <Typography component="p" variant="h5" color="text.secondary">
        Hello, I'm
      </Typography>
      <Typography component="h1" variant="h2" fontWeight="bold">
        John Doe
      </Typography>
      <Box color="text.secondary">
        <TypingEffect staticText="I am" text={['photographer', 'designer']} />
      </Box>
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
