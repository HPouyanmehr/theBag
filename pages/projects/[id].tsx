// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Typography } from '@mui/material';
// custom component
import MainLayout from 'components/layout/MainLayout';
import CenterBox from 'components/common/CenterBox';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';

const Project: NextPage = () => {
  const { pages, projects } = React.useContext(ConstantsContext);
  const router = useRouter();
  const { id } = router.query;

  const NotFound = (
    <MainLayout pageData={{ title: 'Project Not Found' }}>
      <CenterBox flexDirection="column">
        <Typography component="h2" variant="h4">
          Sorry, couldn&apos;t find the project.
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          marginTop="1rem"
          variant="body1"
        >
          You can check projects page to see all project.
        </Typography>
      </CenterBox>
    </MainLayout>
  );

  if (!projects) return NotFound;

  const project = projects.find((project) => project.id === id);
  if (!project) return NotFound;

  return (
    <>
      <MainLayout pageData={{ title: project.title }}>
        <p>{id}</p>
      </MainLayout>
    </>
  );
};

export default Project;
