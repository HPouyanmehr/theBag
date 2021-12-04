// react
import * as React from 'react';
// @mui
import { Card, Typography, useTheme } from '@mui/material';
// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// custom component
import ButtonLink from 'components/common/ButtonLink';
import CustomIconButton from 'components/common/CustomIconButton';
// type
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { palette, shape } = useTheme();
  return (
    <>
      <Card
        style={{
          backgroundColor: palette.primary.main,
          padding: '2rem',
          margin: '2rem',
          borderRadius: shape.borderRadius,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <ButtonLink sx={{ color: '#505050' }}>About</ButtonLink>
          <ButtonLink sx={{ color: '#505050' }}>Skills</ButtonLink>
          <ButtonLink sx={{ color: '#505050' }}>Certificates</ButtonLink>
          <ButtonLink sx={{ color: '#505050' }}>Gallery</ButtonLink>
        </div>
        <div>
          <CustomIconButton size="large" sx={{ color: '#505050' }}>
            <FacebookIcon fontSize="inherit" />
          </CustomIconButton>
          <CustomIconButton size="large" sx={{ color: '#505050' }}>
            <InstagramIcon fontSize="inherit" />
          </CustomIconButton>
          <CustomIconButton size="large" sx={{ color: '#505050' }}>
            <TwitterIcon fontSize="inherit" />
          </CustomIconButton>
        </div>
      </Card>
      <Typography component="p" variant="body1" textAlign="center">
        Made with ❤️ at{' '}
        <ButtonLink href="https://mopeim.com">mopeim</ButtonLink>
      </Typography>
    </>
  );
};

export default Footer;
