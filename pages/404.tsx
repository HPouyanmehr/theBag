// react
import * as React from 'react';
// @mui
import { Box, Typography } from '@mui/material';
// custom component
import CenterBox from 'components/common/CenterBox';
import TextLink from 'components/common/TextLink';
// type
interface Custom404Props {}

const Custom404: React.FunctionComponent<Custom404Props> = (props) => {
  return (
    <CenterBox padding="1rem" flexDirection="column">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          component="h1"
          variant="h6"
          sx={{
            marginRight: '1rem',
            paddingRight: '1rem',
            borderRight: '2px solid currentcolor',
          }}
        >
          404
        </Typography>
        <Typography component="p" variant="body1">
          This page could not be found.
        </Typography>
      </Box>
      <TextLink href="/" style={{ position: 'absolute', bottom: '10%' }}>
        &larr; Back to Home
      </TextLink>
    </CenterBox>
  );
};

export default Custom404;
