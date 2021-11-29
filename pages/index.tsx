// custom component
import ButtonLink from 'components/common/ButtonLink';
import CenterBox from 'components/common/CenterBox';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <CenterBox backgroundColor="tomato">
      <ButtonLink href="/">Gallery</ButtonLink>
    </CenterBox>
  );
};

export default Home;
