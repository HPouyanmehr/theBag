// react
import * as React from 'react';
// @mui
import { Box, Grid, Typography } from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import TypingEffect from 'components/common/TypingEffect';
// custom context
import ConstantsContext from 'context/constantsContext';
import ProjectCard from 'components/common/ProjectCard';
import calcArrayOfObj from 'utility/calcArrayOfObj';
// type
interface ProjectsSectionProps {}

const ProjectsSection: React.FunctionComponent<ProjectsSectionProps> = (
  props
) => {
  const { projects } = React.useContext(ConstantsContext);

  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        textAlign="center"
        marginTop="20%"
      >
        My Projects
      </Typography>
      <Box
        color="text.secondary"
        sx={{ textAlign: 'center', marginTop: '1rem' }}
      >
        <TypingEffect staticText="as a" text={['photographer', 'designer']} />
      </Box>
      <ContainerGrid
        justifyContent={projects?.length === 1 ? 'center' : 'flex-start'}
        sx={{
          padding: {
            xs: '1rem',
            sm: '2rem',
          },
        }}
      >
        {projects
          ? projects.map((project, index) => (
              <Grid
                item
                key={project.title + index}
                xs={12}
                sm={6}
                md={4}
                xl={3}
              >
                <ProjectCard
                  imageAlt={project.images[0].alt}
                  imageSrc={project.images[0].src}
                  title={project.title}
                  likes={calcArrayOfObj(project.images, 'likes')}
                  sx={{
                    maxWidth: '21rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              </Grid>
            ))
          : 'no project'}
      </ContainerGrid>
    </>
  );
};

export default ProjectsSection;
