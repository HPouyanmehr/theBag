// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Grid, Typography } from '@mui/material';
// custom component
import MainLayout from 'components/layout/MainLayout';
import CenterBox from 'components/common/CenterBox';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';
import ContainerGrid from 'components/common/ContainerGrid';
import Review from 'components/common/Review';
import ProjectDetails from 'components/section/ProjectDetails';
import Gallery from 'components/common/Gallery';
import CustomContainer from 'components/common/CustomContainer';

const Project: NextPage = () => {
  const { pages, projects } = React.useContext(ConstantsContext);
  const router = useRouter();
  const { id } = router.query;

  const NotFound = (
    <MainLayout pageData={{ title: 'Project Not Found' }}>
      <CenterBox flexDirection="column">
        <Typography component="h2" variant="h4">
          Sorry, couldn&apos;t find the project.
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          marginTop="1rem"
          variant="body1"
        >
          You can check projects page to see all project.
        </Typography>
      </CenterBox>
    </MainLayout>
  );

  if (!projects) return NotFound;

  const project = projects.find((project) => project.id === id);
  if (!project) return NotFound;

  return (
    <>
      <MainLayout pageData={{ title: project.title }}>
        <CustomContainer sx={{ marginTop: '5rem' }}>
          <Typography component="h1" variant="h3" textAlign="center">
            {project.title}
          </Typography>
          <Typography
            color="text.secondary"
            component="p"
            textAlign="center"
            variant="h6"
          >
            14 min read.
          </Typography>
          <Gallery images={project.images} />
        </CustomContainer>
        <Box margin="2rem" marginTop="5rem">
          <ContainerGrid>
            <Grid item xs={12} md={8}></Grid>
            <Grid item xs>
              <ProjectDetails project={project} />
              <Review />
            </Grid>
          </ContainerGrid>
        </Box>
      </MainLayout>
    </>
  );
};

export default Project;
