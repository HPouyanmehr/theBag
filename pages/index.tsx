// custom component
import CustomAppBar from 'components/common/CustomAppBar';
import HomeHero from 'components/section/HomeHero';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <CustomAppBar />
      <HomeHero />
    </>
  );
};

export default Home;
