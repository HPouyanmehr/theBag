// react
import * as React from 'react';
// custom component
import MainLayout from 'components/layout/MainLayout';
// custom context
import CenterBox from 'components/common/CenterBox';
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';
import BlogCard from 'components/common/BlogCard';

const Blog: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.projects}>
      <CenterBox>
        <BlogCard />
      </CenterBox>
    </MainLayout>
  );
};

export default Blog;
