// react
import * as React from 'react';
// custom component
import MainLayout from 'components/layout/MainLayout';
import ProjectsSection from 'components/section/ProjectsSection';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';

const Projects: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.project}>
      <ProjectsSection />
    </MainLayout>
  );
};

export default Projects;
