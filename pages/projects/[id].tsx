// fs
import fs from 'fs';
// path
import path from 'path';
// react
import * as React from 'react';
// gray-matter
import { remark } from 'remark';
// markdown-to-jsx
import Markdown from 'markdown-to-jsx';
// @mui
import { Box, BoxProps, Grid, styled } from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import Gallery from 'components/common/Gallery';
import MainLayout from 'components/layout/MainLayout';
import ProjectDetails from 'components/section/ProjectDetails';
// projects data
import projectsData, { Project } from 'constants/projectsData';
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
  const { project, content = 'no content' } = props;

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
              <Markdown children={content} />
            </Grid>
            <Grid item xs>
              {/* <ProjectDetails project={project} /> */}
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

  const filename = project.postFileName + '.md';
  const md = fs.readFileSync(path.join(`posts\\${filename}`));
  const { value: content } = remark.processSync(md);

  return {
    props: {
      project: JSON.stringify(project),
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
