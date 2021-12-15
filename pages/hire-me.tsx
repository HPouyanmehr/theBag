// react
import * as React from 'react';
// @mui
import { Box, BoxProps, Grid, styled, Typography } from '@mui/material';
// custom component
import ContactForm from 'components/common/ContactForm';
import MainLayout from 'components/layout/MainLayout';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';
import ContainerGrid from 'components/common/ContainerGrid';

const CustomBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '30% 1rem 5% 1rem',
  [theme.breakpoints.up(350)]: {
    margin: '20% 1rem 5% 1rem',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '15% 2rem 5% 2rem',
  },
  [theme.breakpoints.up('md')]: {
    margin: '10% 2rem 5% 2rem',
  },
}));

const HireMe: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.hireMe}>
      <CustomBox>
        <ContainerGrid>
          <Grid
            item
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  md: '70%',
                },
              }}
            >
              <Typography component="h2" variant="h4">
                What can I do for you?
              </Typography>
              <Typography color="text.secondary" component="p" variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                laborum similique voluptas pariatur a doloremque facilis minima
                quam dolores eveniet eaque aspernatur modi hic? Quod sunt in
                recusandae adipisci possimus?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <ContactForm />
          </Grid>
        </ContainerGrid>
      </CustomBox>
    </MainLayout>
  );
};

export default HireMe;
