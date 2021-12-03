// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import { Grid, Typography } from '@mui/material';
import CustomButton from 'components/common/CustomButton';
// type
interface HireMeProps {}

const HireMe: React.FunctionComponent<HireMeProps> = (props) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          minHeight: '100vh',
          padding: '2rem',
        }}
      >
        <Grid
          item
          md
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography component="h2" variant="h4" color="primary">
            I am available as freelancer.
          </Typography>
          <CustomButton
            variant="contained"
            size="large"
            sx={{ marginTop: '2rem' }}
          >
            Hire me
          </CustomButton>
        </Grid>
        <Grid
          item
          md
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src="/sections/freelancer-male.svg" height={600} width={600} />
        </Grid>
      </Grid>
    </>
  );
};

export default HireMe;
