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
import ConstantsContext from 'context/constantsContext';
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
  '& > :not(a:first-of-type)': {
    marginLeft: '0.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <>
      <CustomAppBarRoot position="absolute">
        <Container>
          <Toolbar>
            <NameLogo name="john doe" color="#383838" bgColor="white" />
            <LinkContainer sx={{ marginLeft: 'auto' }}>
              <LinksBox>
                {navLinks?.map((navLink, index) => (
                  <ButtonLink
                    key={navLink.label + index + navLink.href}
                    href={navLink.href}
                    {...navLink.buttonProps}
                  >
                    {navLink.label}
                  </ButtonLink>
                ))}
              </LinksBox>
              <MenuToggler color="info" sx={{ display: { sm: 'none' } }} />
            </LinkContainer>
          </Toolbar>
        </Container>
      </CustomAppBarRoot>
    </>
  );
};

export default CustomAppBar;
