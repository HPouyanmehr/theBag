// react
import * as React from 'react';
// @mui
import { Box, Typography, useTheme } from '@mui/material';
import ButtonLink from 'components/common/ButtonLink';
// type
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { palette } = useTheme();
  return (
    <>
      <Box
        bgcolor={palette.primary.main}
        padding="2rem"
        margin="2rem"
        borderRadius="4px"
      >
        <p>link</p>
        <p>link</p>
        <p>link</p>
      </Box>
      <Typography component="p" variant="body1" textAlign="center">
        Made with ❤️ at{' '}
        <ButtonLink href="https://mopeim.com">mopeim</ButtonLink>
      </Typography>
    </>
  );
};

export default Footer;
