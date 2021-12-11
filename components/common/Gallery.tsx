// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import { Box, Pagination } from '@mui/material';
// swiper
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// type
import { ProjectImage } from 'constants/projectsData';
interface GalleryProps {
  images: ProjectImage[];
}

const Gallery: React.FunctionComponent<GalleryProps> = (props) => {
  const { images, ...otherPros } = props;

  return (
    <>
      <Box
        sx={{
          height: '32rem',
        }}
      >
        <Swiper
          modules={[Navigation, Scrollbar]}
          navigation
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          style={{ height: '100%' }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.alt + index}>
              <Image
                alt={image.alt}
                src={image.src}
                loading={index === 0 ? 'eager' : 'lazy'}
                objectFit="contain"
                layout="fill"
                objectPosition="center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Gallery;
