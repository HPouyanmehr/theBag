// react
import * as React from 'react';
// swiper
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react';
// style
import styles from 'styles/components/RecentProjects.module.scss';
import { useMediaQuery, useTheme } from '@mui/material';
// type
interface CustomSwiperProps extends SwiperProps {}

const CustomSwiper: React.FunctionComponent<CustomSwiperProps> = (props) => {
  const { children, ...otherProps } = props;
  const { breakpoints } = useTheme();
  const isUpSm = useMediaQuery(breakpoints.up('sm'));

  return (
    <>
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          centeredSlides
          navigation={isUpSm ? true : false}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          {...otherProps}
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default CustomSwiper;
