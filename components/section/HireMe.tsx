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
          <Typography component="h2" variant="h4">
            I am available as freelancer.
          </Typography>
          <CustomButton
            disableRipple
            color="info"
            variant="contained"
            size="large"
            sx={{
              marginTop: '2rem',
              '&: hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },
            }}
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
          <Image
            alt="A freelancer vector"
            src="/sections/freelancer-male.svg"
            height={600}
            width={600}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HireMe;
