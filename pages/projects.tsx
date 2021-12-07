// react
import * as React from 'react';
// type
import type { NextPage } from 'next';
import MainLayout from 'components/layout/MainLayout';
import ConstantsContext from 'context/constantsContext';

const Projects: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages!.projects}>
      <p>hi</p>
    </MainLayout>
  );
};

export default Projects;
