// react
import * as React from 'react';
// @mui
import {
  AppBar,
  AppBarProps,
  Box,
  BoxProps,
  Container,
  styled,
  Toolbar,
} from '@mui/material';

// custom component
import NameLogo from 'components/common/NameLogo';
import ButtonLink from 'components/common/ButtonLink';
import MenuToggler from 'components/common/MenuToggler';
// type
interface CustomAppBarProps {}

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const LinkContainer = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: theme.direction === 'ltr' ? 'auto' : 'none',
  marginRight: theme.direction === 'rtl' ? 'auto' : 'none',
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  return (
    <>
      <CustomAppBarRoot position="absolute">
        <Container>
          <Toolbar>
            <NameLogo name="john doe" color="#383838" bgColor="white" />
            <LinkContainer sx={{ marginLeft: 'auto' }}>
              <LinksBox>
                <ButtonLink>About</ButtonLink>
                <ButtonLink>Skills</ButtonLink>
                <ButtonLink>Certificates</ButtonLink>
                <ButtonLink>Gallery</ButtonLink>
              </LinksBox>
              <MenuToggler sx={{ display: { sm: 'none' } }} />
            </LinkContainer>
          </Toolbar>
        </Container>
      </CustomAppBarRoot>
    </>
  );
};

export default CustomAppBar;
