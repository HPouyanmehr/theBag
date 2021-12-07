// react
import * as React from 'react';
// swiper
import { SwiperSlide } from 'swiper/react';
// @mui
import { Box, BoxProps, Typography, styled } from '@mui/material';
// custom component
import CustomSwiper from 'components/common/CustomSwiper';
import ProjectCard from 'components/common/ProjectCard';
// fake data
import projectsData from 'constants/projectsData';
// utility
import calcArrayOfObj from 'utility/calcArrayOfObj';
// type
interface RecentProjectsProps {}

const CustomWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '6rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '6rem 2rem',
  },
}));

const RecentProjects: React.FunctionComponent<RecentProjectsProps> = (
  props
) => {
  const [activeIndex, setActiveIndex] = React.useState<number>();

  return (
    <CustomWrapper>
      <Typography
        component="h2"
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        My Recent Projects
      </Typography>
      <CustomSwiper
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide
            key={project.id + index}
            style={{
              transform: index === activeIndex ? 'scale(1)' : 'scale(0.75)',
              transition: '0.2s all ease-in-out',
            }}
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
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </CustomWrapper>
  );
};

export default RecentProjects;
