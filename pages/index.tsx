// custom component
import ButtonLink from 'components/common/ButtonLink';
import CenterBox from 'components/common/CenterBox';
import CustomAppBar from 'components/common/CustomAppBar';
import NameLogo from 'components/common/NameLogo';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <CustomAppBar />
    </>
    // <CenterBox backgroundColor="tomato">
    // </CenterBox>
  );
};

export default Home;
