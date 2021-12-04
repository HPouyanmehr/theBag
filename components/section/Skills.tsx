// react
import * as React from 'react';
// @mui
import { Box, Container, Grid, Typography } from '@mui/material';
// custom component
import SkillProgress from 'components/common/SkillProgress';
// custom icons
import IllustratorCCIcon from 'components/icon/IllustratorCC';
import LightroomCCIcon from 'components/icon/LightroomCC';
import PhotoshopIcon from 'components/icon/Photoshop';
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Photoshop',
      progressValue: 78,
    },
    {
      Icon: (
        <LightroomCCIcon bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Lightroom',
      progressValue: 83,
    },
    {
      Icon: (
        <IllustratorCCIcon
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: 'Illustrator',
      progressValue: 97,
    },
  ];

  return (
    <>
      <Container
        id="skills"
        maxWidth={containerMaxWidth}
        sx={{ marginTop: '5rem', marginBottom: '5rem' }}
      >
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <Grid container spacing={2} marginTop="2rem">
          {skills.map((skill, index) => (
            <Grid
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title} | ${skill.progressValue}%`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Skills;
