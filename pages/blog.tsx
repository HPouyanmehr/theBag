// react
import * as React from 'react';
// @mui
import { Grid, Typography } from '@mui/material';
// custom component
import BlogCard from 'components/common/BlogCard';
import ContainerGrid from 'components/common/ContainerGrid';
import MainLayout from 'components/layout/MainLayout';
// custom context
import CenterBox from 'components/common/CenterBox';
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';

const Blog: NextPage = (props) => {
  const { pages, blogPosts } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.projects}>
      {blogPosts ? (
        <ContainerGrid
          sx={{ padding: { xs: '1rem', sm: '2rem' }, marginTop: '5rem' }}
        >
          {blogPosts.map((post, index) => (
            <Grid item key={post.title + index} xs={12} md={4} lg={3}>
              <BlogCard
                href={`/blog/${post.id}`}
                readTime={5}
                imageAlt={post.image.alt}
                imageSrc={post.image.src}
                title={post.title}
              />
            </Grid>
          ))}
        </ContainerGrid>
      ) : (
        <CenterBox>
          <Typography component="p" variant="body1">
            No post availabe.
          </Typography>
        </CenterBox>
      )}
    </MainLayout>
  );
};

export default Blog;
