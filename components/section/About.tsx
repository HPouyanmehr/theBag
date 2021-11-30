// react
import * as React from 'react';
// @mui
import { Grid, useTheme } from '@mui/material';
// type
interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  const {
    palette: { info, primary },
  } = useTheme();

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: info.main,
        color: primary.main,
      }}
      id="about"
    >
      <Grid container spacing={2} sx={{ marginTop: 0 }}>
        <Grid item xs={12} md={6}>
          <p>photo</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>about text</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
