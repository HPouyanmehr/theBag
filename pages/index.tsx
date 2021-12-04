// next
import Head from 'next/head';
// custom component
import CustomAppBar from 'components/common/CustomAppBar';
import About from 'components/section/About';
import Footer from 'components/section/Footer';
import HireMe from 'components/section/HireMe';
import HomeHero from 'components/section/HomeHero';
import RecentProjects from 'components/section/RecentProjects';
import Skills from 'components/section/Skills';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Doe</title>
        <meta
          name="description"
          content="theBag is a multipurpose template made by Nextjs and MUI v5 which can be used for Portfolios, Resumes, CVs, and Personal websites."
        />
      </Head>
      <CustomAppBar />
      <HomeHero />
      <About />
      <Skills />
      <HireMe />
      <RecentProjects />
      <Footer />
    </>
  );
};

export default Home;
