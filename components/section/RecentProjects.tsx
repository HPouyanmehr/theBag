// react
import * as React from 'react';
// swiper
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// @mui
import { Card, CardContent, Typography } from '@mui/material';
// type
interface RecentProjectsProps {}

const RecentProjects: React.FunctionComponent<RecentProjectsProps> = (
  props
) => {
  const slides = [
    {
      title: 'slide',
    },
    {
      title: 'slide',
    },
    {
      title: 'slide',
    },
    {
      title: 'slide',
    },
    {
      title: 'slide',
    },
    {
      title: 'slide',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState<number>();

  return (
    <>
      <Swiper
        centeredSlides
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{
          margin: '2rem',
          paddingBottom: '2rem',
          paddingTop: '2rem',
          minHeight: '6rem',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.title + index}
            style={{
              transform: index === activeIndex ? 'scale(1)' : 'scale(0.75)',
              transition: '0.2s all ease-in-out',
            }}
          >
            <Card>
              <CardContent>
                <Typography component="p" textAlign="center">
                  {`${index} - ${
                    index === activeIndex ? 'active' : 'disabled'
                  }`}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RecentProjects;
