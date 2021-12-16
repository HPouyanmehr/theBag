// react
import * as React from 'react';
// custom component
import MainLayout from 'components/layout/MainLayout';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';

const Blog: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.projects}>
      <p>blog page</p>
    </MainLayout>
  );
};

export default Blog;
