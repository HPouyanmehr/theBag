// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
} from '@mui/material';
// custom component
import FacebookIconLink from 'components/common/FacebookIconLink';
import InstagramIconLink from 'components/common/InstagramIconLink';
import TwitterIconLink from 'components/common/TwitterIconLink';
import ContainerGrid from 'components/common/ContainerGrid';
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '21rem',
  [theme.breakpoints.up(350)]: {
    height: '26rem',
  },
  [theme.breakpoints.up('sm')]: {
    height: '50vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  overflow: 'hidden',
  scrollMarginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
    scrollMarginTop: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    height: '90vh',
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    width: '100%',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <CustomCard id="about">
      <ContainerGrid sx={{ marginTop: 0, height: '100%' }}>
        <Grid item xs={12} md={6} style={{ padding: 0 }}>
          <ImageWrapper>
            <Image
              alt="John Doe profile image"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              onLoad={() => setIsLoaded(true)}
              src="/profile.jpg"
            />
            {!isLoaded && (
              <Skeleton
                variant="rectangular"
                sx={{
                  backgroundColor: 'currentcolor',
                  height: '100%',
                  position: 'absolute',
                  width: '100%',
                }}
              />
            )}
          </ImageWrapper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: '2rem', position: 'relative' }}
        >
          <Card
            sx={{ boxShadow: 'none', height: '100%', position: 'relative' }}
          >
            <Typography component="h2" variant="h5" fontWeight="bold">
              A bit about me
            </Typography>
            <Typography component="p" variant="body1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed nobis. Facere est eaque at blanditiis vel dolore
              ipsam ad nam? Sed saepe commodi ducimus quae odio vero assumenda
              reprehenderit reiciendis optio maiores perspiciatis doloribus,
              praesentium non accusantium, beatae perferendis molestias!
              Asperiores non praesentium, ex suscipit officia ad impedit nulla
              laboriosam magnam doloremque perspiciatis alias esse corrupti
              beatae dolore perferendis, blanditiis illo adipisci dolores modi
              eius minus. Qui, sunt. Ipsum officiis aliquid pariatur iusto
              deleniti.
            </Typography>
            <Typography component="p" variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              illo, architecto officiis recusandae praesentium impedit pariatur
              repellendus, natus ducimus sapiente eius odio aspernatur magni
              repellat explicabo laboriosam voluptatibus excepturi voluptas,
              accusamus libero vel tempora quod consequuntur. Quaerat id eveniet
              eaque?
            </Typography>
            <CustomCardActions>
              <FacebookIconLink />
              <InstagramIconLink />
              <TwitterIconLink />
            </CustomCardActions>
          </Card>
        </Grid>
      </ContainerGrid>
    </CustomCard>
  );
};

export default About;
