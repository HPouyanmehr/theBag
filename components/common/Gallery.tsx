// react
import * as React from 'react';
// @mui
import { Box, useMediaQuery, useTheme } from '@mui/material';
// swiper
import SwiperCore, { Thumbs, Navigation, Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// style
import classes from 'styles/components/Gallery.module.scss';
// type
import { ProjectImage } from 'constants/projectsData';
import Image from 'next/image';
interface GalleryProps {
  images: ProjectImage[];
}

const Gallery: React.FunctionComponent<GalleryProps> = (props) => {
  const { images } = props;
  const [swiperThumbs, setSwiperThumbs] = React.useState<SwiperCore>();
  const { breakpoints } = useTheme();
  const isUpSm = useMediaQuery(breakpoints.up('sm'));

  return (
    <>
      <Box className={classes.galleryWrapper}>
        <Swiper
          modules={[Navigation, Scrollbar, Thumbs]}
          navigation={isUpSm ? true : false}
          scrollbar={{ draggable: true }}
          thumbs={{ swiper: swiperThumbs }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.alt + index} style={{ height: '26rem' }}>
              <Image
                alt={image.alt}
                height={image.height}
                layout="fill"
                objectFit="contain"
                src={image.src}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box className={classes.thumbsWrapper}>
        <Swiper
          modules={[FreeMode, Thumbs]}
          onSwiper={setSwiperThumbs}
          slidesPerView="auto"
          spaceBetween={10}
          watchSlidesProgress
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.alt + index} className="swiper-slide-auto">
              <Image
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={image.src}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Gallery;
