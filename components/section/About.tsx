// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import { Grid, Typography, useTheme } from '@mui/material';
// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
// type
interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  const {
    palette: { info, primary },
  } = useTheme();

  return (
    <div
      style={{
        height: '90vh',
        margin: '2rem',
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: primary.main,
        boxShadow:
          'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
      }}
      id="about"
    >
      <Grid container spacing={2} sx={{ marginTop: 0, height: '100%' }}>
        <Grid item xs={12} md={6} style={{ padding: 0 }}>
          <div
            style={{
              height: '100%',
              position: 'relative',
              width: '100%',
            }}
          >
            <Image
              alt="John Doe profile image"
              layout="fill"
              loading="eager"
              objectFit="cover"
              objectPosition="center center"
              src="/profile.jpg"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: '2rem', position: 'relative' }}
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
            laboriosam magnam doloremque perspiciatis alias esse corrupti beatae
            dolore perferendis, blanditiis illo adipisci dolores modi eius
            minus. Qui, sunt. Ipsum officiis aliquid pariatur iusto deleniti.
          </Typography>
          <Typography component="p" variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            illo, architecto officiis recusandae praesentium impedit pariatur
            repellendus, natus ducimus sapiente eius odio aspernatur magni
            repellat explicabo laboriosam voluptatibus excepturi voluptas,
            accusamus libero vel tempora quod consequuntur. Quaerat id eveniet
            eaque?
          </Typography>
          <div
            style={{
              position: 'absolute',
              padding: '2rem',
              bottom: 0,
              right: 0,
            }}
          >
            <CustomIconButton color="info">
              <FacebookIcon />
            </CustomIconButton>
            <CustomIconButton color="info">
              <InstagramIcon />
            </CustomIconButton>
            <CustomIconButton color="info">
              <TwitterIcon />
            </CustomIconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
