// custom component
import CenterBox from 'components/common/CenterBox';
import NameLogo from 'components/common/NameLogo';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <CenterBox backgroundColor="tomato">
      <NameLogo name="hosein pouyanmehr" />
    </CenterBox>
  );
};

export default Home;
