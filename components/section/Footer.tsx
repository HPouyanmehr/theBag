// react
import * as React from 'react';
// @mui
import { Card, CardContent, Typography } from '@mui/material';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
import TextLink from 'components/common/TextLink';
import FacebookIconLink from 'components/common/FacebookIconLink';
import InstagramIconLink from 'components/common/InstagramIconLink';
import TwitterIconLink from 'components/common/TwitterIconLink';
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
          <FacebookIconLink />
          <InstagramIconLink />
          <TwitterIconLink />
        </CardContent>
      </Card>
      <Typography component="p" variant="body1" textAlign="center">
        Made with ❤️ at <TextLink href="https://mopeim.com">mopeim</TextLink>
      </Typography>
    </>
  );
};

export default Footer;
