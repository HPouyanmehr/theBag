// react
import * as React from 'react';
// @mui
import { Box, Icon, Typography } from '@mui/material';
// @mui icons
import CategoryIcon from '@mui/icons-material/Category';
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
  const { title, category } = project;

  return (
    <Box>
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      <Typography component="h3" variant="body1">
        Read Time: 14 min
      </Typography>
      <Typography component="h2" variant="body1">
        Published at {project.date.toDate().toDateString()}
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
