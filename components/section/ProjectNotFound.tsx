// react
import * as React from 'react';
// @mui
import { Typography } from '@mui/material';
// custom component
import CenterBox from 'components/common/CenterBox';
// type
interface ProjectNotFoundProps {}

const ProjectNotFound: React.FunctionComponent<ProjectNotFoundProps> = (
  props
) => {
  return (
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
  );
};

export default ProjectNotFound;
