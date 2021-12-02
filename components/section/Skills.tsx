// react
import * as React from 'react';
// @mui
import { Box, Container, Icon, Typography } from '@mui/material';
// custom component
import SkillProgress from 'components/common/SkillProgress';
// custom icons
import HTML5 from 'components/icon/HTML5';
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);
  return (
    <>
      <Container
        id="skills"
        maxWidth={containerMaxWidth}
        sx={{ marginTop: '5rem', marginBottom: '5rem' }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="primary"
          textAlign="center"
        >
          My Skills
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <SkillProgress
            size={100}
            value={77}
            Icon={
              <Icon color="primary" fontSize="large">
                <HTML5 color="inherit" fontSize="inherit" />
              </Icon>
            }
            subtitle="HTML5 | 98%"
          />
        </Box>
      </Container>
    </>
  );
};

export default Skills;
