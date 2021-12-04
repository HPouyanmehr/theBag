// react
import * as React from 'react';
// next
import Image from 'next/image';
// swiper
import { SwiperSlide } from 'swiper/react';
// @mui
import {
  Card,
  CardActions,
  CardContent,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
// @mui icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
// style
import styles from 'styles/components/RecentProjects.module.scss';
import CustomSwiper from 'components/common/CustomSwiper';
// fake data
import projectsData, { ProjectImage } from 'constants/projectsData';
import CustomButton from 'components/common/CustomButton';
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
              <Card
                sx={{
                  minHeight: '21rem',
                  '&: hover': {
                    img: {
                      transition: 'all 0.5s ease-in-out',
                      transform: 'scale(1.4)',
                      filter: 'blur(2px)',
                      WebkitFilter: 'blur(2px)',
                    },
                  },
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    margin: '0.5rem',
                    height: '21rem',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    alt={project.images[0].alt}
                    src={project.images[0].src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center"
                  />
                </div>
                <CardContent>
                  <Typography component="h3" variant="h6" textAlign="center">
                    {project.title}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <List>
                    <ListItem>
                      <ListItemIcon
                        sx={{ minWidth: 'auto', marginRight: '0.5rem' }}
                      >
                        <Icon sx={{ display: 'flex', color: 'tomato' }}>
                          <FavoriteIcon color="inherit" />
                        </Icon>
                      </ListItemIcon>
                      <ListItemText>
                        {calculateLikes(project.images)}
                      </ListItemText>
                    </ListItem>
                  </List>
                  <CustomButton
                    disableRipple
                    variant="text"
                    sx={{ color: 'black', marginLeft: 'auto' }}
                    endIcon={<ChevronRightIcon />}
                  >
                    more
                  </CustomButton>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </>
  );
};

export default RecentProjects;
