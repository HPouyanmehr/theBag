// react
import * as React from 'react';
// swiper
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react';
// style
import styles from 'styles/components/RecentProjects.module.scss';
// type
interface CustomSwiperProps extends SwiperProps {}

const CustomSwiper: React.FunctionComponent<CustomSwiperProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <>
      <div className={styles.sliderWrapper}>
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
          {...otherProps}
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default CustomSwiper;
