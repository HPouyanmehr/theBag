// react
import * as React from 'react';
// next
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
// @mui
import { Grid, GridProps, Skeleton, Typography, styled } from '@mui/material';
// custom component
const CustomButton = dynamic(() => import('components/common/CustomButton'));
const ContainerGrid = dynamic(() => import('components/common/ContainerGrid'));
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
  const [isLoaded, setIsLoaded] = React.useState(false);

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
            }}
          >
            Hire me
          </CustomButton>
        </CustomGridItem>
        <CustomGridItem
          item
          md
          order={{ xs: 1, md: 2 }}
          sx={{ position: 'relative' }}
        >
          <Image
            alt="A freelancer vector"
            height={600}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            src="/sections/freelancer-male.svg"
            width={600}
          />
          {!isLoaded && (
            <Skeleton
              variant="rectangular"
              sx={{
                backgroundColor: 'currentcolor',
                borderRadius: '4px',
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
          )}
        </CustomGridItem>
      </CustomContainerGrid>
    </>
  );
};

export default HireMe;
