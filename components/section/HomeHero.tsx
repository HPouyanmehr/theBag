// react
import * as React from 'react';
// @mui
import { Typography } from '@mui/material';
// react-typing-effect
import ReactTypingEffect from 'react-typing-effect';
// custom components
import CenterBox from 'components/common/CenterBox';
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
      <ReactTypingEffect
        text={['photographer', 'desiner']}
        staticText="I'm"
        typingDelay={150}
        speed={200}
        eraseSpeed={100}
        eraseDelay={2000}
      />
    </CenterBox>
  );
};

export default HomeHero;
