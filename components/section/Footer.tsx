// react
import * as React from 'react';
// @mui
import { Card, CardContent, Typography } from '@mui/material';
// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
import TextLink from 'components/common/TextLink';
// type
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const navigationLinks = [
    { title: 'About', href: '/' },
    { title: 'Skills', href: '/' },
    { title: 'Certificates', href: '/' },
    { title: 'Gallery', href: '/' },
  ];

  return (
    <>
      <Card
        style={{
          padding: '2rem',
          margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent style={{ padding: '0.5rem' }}>
          {navigationLinks.map((navigation, index) => (
            <TextLink
              key={navigation.title + index}
              href={navigation.href}
              style={{
                marginLeft: '0.5rem',
                marginRight: '0.5rem',
              }}
            >
              {navigation.title}
            </TextLink>
          ))}
        </CardContent>
        <CardContent style={{ padding: '0.5rem' }}>
          <CustomIconButton size="large" color="inherit">
            <FacebookIcon fontSize="inherit" />
          </CustomIconButton>
          <CustomIconButton size="large" color="inherit">
            <InstagramIcon fontSize="inherit" />
          </CustomIconButton>
          <CustomIconButton size="large" color="inherit">
            <TwitterIcon fontSize="inherit" />
          </CustomIconButton>
        </CardContent>
      </Card>
      <Typography component="p" variant="body1" textAlign="center">
        Made with ❤️ at <TextLink href="https://mopeim.com">mopeim</TextLink>
      </Typography>
    </>
  );
};

export default Footer;
