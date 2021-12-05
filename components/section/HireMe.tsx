// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import { Grid, GridProps, Typography, styled } from '@mui/material';
import CustomButton from 'components/common/CustomButton';
import ContainerGrid from 'components/common/ContainerGrid';
// type
interface HireMeProps {}

const CustomContainerGrid = styled(ContainerGrid)<GridProps>(({ theme }) => ({
  justifyContent: 'center',
  padding: '1rem',
  [theme.breakpoints.up('sm')]: {
    padding: '2rem',
  },
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));

const HireMe: React.FunctionComponent<HireMeProps> = (props) => {
  return (
    <>
      <CustomContainerGrid>
        <CustomGridItem item md order={{ xs: 2, md: 1 }}>
          <Typography component="h2" variant="h4" textAlign="center">
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
        </CustomGridItem>
        <CustomGridItem item md order={{ xs: 1, md: 2 }}>
          <Image
            alt="A freelancer vector"
            src="/sections/freelancer-male.svg"
            height={600}
            width={600}
          />
        </CustomGridItem>
      </CustomContainerGrid>
    </>
  );
};

export default HireMe;
