// react
import * as React from 'react';
// reading-time
import readingTime from 'reading-time';
// @mui
import { Box, BoxProps, Grid, styled } from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import Gallery from 'components/common/Gallery';
import MainLayout from 'components/layout/MainLayout';
import Markdown from 'components/common/Markdown';
import ProjectDetails from 'components/section/ProjectDetails';
// projects data
import projectsData, { Project } from 'constants/projectsData';
// custom lib
import { getAllProjectsId, getProjectData } from 'lib/projects';
// type
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import ProjectNotFound from 'components/section/ProjectNotFound';

interface ProjectPageProps {
  project?: string;
  content?: string;
}

const ProjectContainer = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '5rem 1rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '5rem 2rem 1rem',
  },
}));

const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  const { project, content = '' } = props;
  const contentStats = readingTime(content);

  const NotFound = (
    <MainLayout pageData={{ title: 'Project Not Found' }}>
      <ProjectNotFound />
    </MainLayout>
  );

  if (!project) return NotFound;

  const parsedProject: Project = JSON.parse(project);

  return (
    <>
      <MainLayout pageData={{ title: parsedProject.title }}>
        <ProjectContainer>
          <ContainerGrid>
            <Grid item xs={12} md={8}>
              <Gallery images={parsedProject.images} />
            </Grid>
            <Grid item xs>
              <ProjectDetails
                project={parsedProject}
                readTime={Math.ceil(contentStats.minutes)}
              />
            </Grid>
          </ContainerGrid>
          <ContainerGrid>
            <Grid item xs={12} md={8}>
              <Markdown content={content} />
            </Grid>
          </ContainerGrid>
        </ProjectContainer>
      </MainLayout>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const project = projectsData.find((project) => project.id === params!.id);

  if (!project) return { props: {} };

  const filename = project.postFileName;
  const { content } = await getProjectData(filename);

  if (!content)
    return {
      props: {
        project: JSON.stringify(project),
      },
    };

  return {
    props: {
      project: JSON.stringify(project),
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectsId();

  return {
    paths,
    fallback: 'blocking',
  };
};
