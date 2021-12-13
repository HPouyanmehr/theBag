// react
import * as React from 'react';
// @mui
import { Box, Typography } from '@mui/material';
// dayjs
import dayjs from 'dayjs';
// type
import { Project } from 'constants/projectsData';
import CustomChip from 'components/common/CustomChip';
interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FunctionComponent<ProjectDetailsProps> = (
  props
) => {
  const { project, ...otherProps } = props;
  const { title, category, date } = project;

  const shortDate = dayjs(date).toDate().toDateString();

  return (
    <Box>
      <Typography component="h1" variant="h4" sx={{ marginBottom: '1rem' }}>
        {title}
      </Typography>
      <Typography component="p" variant="body1" sx={{ marginBottom: '0.5rem' }}>
        Read Time: 14 min
      </Typography>
      <Typography component="p" variant="body1" sx={{ marginBottom: '0.5rem' }}>
        Published at {shortDate}
      </Typography>
      <Box alignItems="center" display="flex">
        {category.map((category, index) => (
          <CustomChip key={category + index} label={category} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectDetails;
