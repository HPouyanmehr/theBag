// react
import * as React from 'react';
// @mui
import { Box, Container, Icon, Typography } from '@mui/material';
// @mui icon
import HomeIcon from '@mui/icons-material/Home';
// custom component
import SkillProgress from 'components/common/SkillProgress';
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);
  return (
    <>
      <Container maxWidth={containerMaxWidth} sx={{ margin: '5rem 0' }}>
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
                <HomeIcon color="inherit" fontSize="inherit" />
              </Icon>
            }
            subtitle="HTML"
          />
        </Box>
      </Container>
    </>
  );
};

export default Skills;
