// react
import * as React from 'react';
// swiper
import { SwiperSlide } from 'swiper/react';
// @mui
import { Typography } from '@mui/material';
// style
import styles from 'styles/components/RecentProjects.module.scss';
import CustomSwiper from 'components/common/CustomSwiper';
// fake data
import projectsData, { ProjectImage } from 'constants/projectsData';
import ProjectCard from 'components/common/ProjectCard';
// type
interface RecentProjectsProps {}

const RecentProjects: React.FunctionComponent<RecentProjectsProps> = (
  props
) => {
  const [activeIndex, setActiveIndex] = React.useState<number>();

  const calculateLikes = (images: ProjectImage[]) => {
    let totalLikes = 0;
    images.forEach((image) => (totalLikes += image.likes));
    return totalLikes;
  };

  return (
    <>
      <div className={styles.sliderWrapper}>
        <Typography
          component="h2"
          variant="h4"
          color="primary"
          textAlign="center"
        >
          My Recent Projects
        </Typography>
        <CustomSwiper
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          style={{
            margin: '2rem',
          }}
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
                likes={calculateLikes(project.images)}
                imageLoading={index === activeIndex ? 'eager' : 'lazy'}
              />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </>
  );
};

export default RecentProjects;
