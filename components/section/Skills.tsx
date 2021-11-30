// react
import { Container, Typography } from '@mui/material';
import ComponentsContext from 'context/componentsContext';
import * as React from 'react';
// type
interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);
  return (
    <>
      <Container maxWidth={containerMaxWidth} sx={{ margin: '5rem 0' }}>
        <Typography component="h2" variant="h4" color="primary">
          My Skills
        </Typography>
      </Container>
    </>
  );
};

export default Skills;
