// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, BoxProps, Grid, Typography, styled } from '@mui/material';
// custom component
import CenterBox from 'components/common/CenterBox';
import ContainerGrid from 'components/common/ContainerGrid';
import Gallery from 'components/common/Gallery';
import MainLayout from 'components/layout/MainLayout';
import ProjectDetails from 'components/section/ProjectDetails';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';

const ProjectContainer = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '5rem 1rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '5rem 2rem 1rem',
  },
}));

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
        <ProjectContainer>
          <ContainerGrid>
            <Grid item xs={12} md={8}>
              <Gallery images={project.images} />
            </Grid>
            <Grid item xs>
              <ProjectDetails project={project} />
            </Grid>
          </ContainerGrid>
        </ProjectContainer>
      </MainLayout>
    </>
  );
};

export default Project;
