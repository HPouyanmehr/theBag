// react
import * as React from 'react';
// custom component
import MainLayout from 'components/layout/MainLayout';
import CenterBox from 'components/common/CenterBox';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';
import ContactForm from 'components/common/ContactForm';

const HireMe: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout>
      <CenterBox>
        <ContactForm />
      </CenterBox>
    </MainLayout>
  );
};

export default HireMe;
