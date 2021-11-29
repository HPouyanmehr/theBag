// react
import * as React from 'react';
// @mui
import {
  AppBar,
  AppBarProps,
  Box,
  Container,
  styled,
  Toolbar,
} from '@mui/material';
// custom component
import NameLogo from 'components/common/NameLogo';
import ButtonLink from 'components/common/ButtonLink';
// type
interface CustomAppBarProps {}

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  return (
    <CustomAppBarRoot position="absolute">
      <Container>
        <Toolbar>
          <NameLogo name="john doe" />
          <Box sx={{ marginLeft: 'auto' }}>
            <ButtonLink>About</ButtonLink>
            <ButtonLink>Skills</ButtonLink>
            <ButtonLink>Certificates</ButtonLink>
            <ButtonLink>Gallery</ButtonLink>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBarRoot>
  );
};

export default CustomAppBar;
