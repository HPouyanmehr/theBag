// custom component
import CustomAppBar from 'components/common/CustomAppBar';
import About from 'components/section/About';
import HomeHero from 'components/section/HomeHero';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <CustomAppBar />
      <HomeHero />
      <About />
    </>
  );
};

export default Home;
