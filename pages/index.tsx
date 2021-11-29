// custom component
import CenterBox from 'components/common/CenterBox';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <CenterBox backgroundColor="tomato">
      <p>hi</p>
    </CenterBox>
  );
};

export default Home;
