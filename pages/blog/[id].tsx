// react
import * as React from 'react';
// dayjs
import dayjs from 'dayjs';
// reading-time
import readingTime from 'reading-time';
// @mui
import { Box, BoxProps, Grid, Typography, styled } from '@mui/material';
// custom component
import Markdown from 'components/common/Markdown';
import MainLayout from 'components/layout/MainLayout';
// blogPost data
import blogPosts from 'constants/blogPostsData';
// custom lib
import { getBlogPostsId, getBlogPostById } from 'lib/blogPost';
// type
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { BlogPost as BlogPostDataProps } from 'types/blogPostType';
import ProjectNotFound from 'components/section/ProjectNotFound';
import ContainerGrid from 'components/common/ContainerGrid';
interface BlogPostProps {
  blogPost?: string;
  content?: string;
}

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '10rem 1rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '10rem 2rem 1rem',
  },
}));

const BlogPost: NextPage<BlogPostProps> = (props) => {
  const { blogPost, content = '' } = props;

  if (!blogPost) return <ProjectNotFound />;

  const parsedBlogPost: BlogPostDataProps = JSON.parse(blogPost);
  const { text: readTime } = readingTime(content);
  const date = dayjs(parsedBlogPost.date);

  return (
    <MainLayout>
      <CustomContainer>
        <Typography component="h1" textAlign="center" variant="h4">
          {parsedBlogPost.title}
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          marginTop="1rem"
          textAlign="center"
          variant="body1"
        >
          {readTime} - Published at {date.toDate().toDateString()}
        </Typography>
        <ContainerGrid>
          <Grid item xs={12} md={8} sx={{ margin: '3rem auto 1rem' }}>
            <Markdown content={content} />
          </Grid>
        </ContainerGrid>
      </CustomContainer>
    </MainLayout>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const blogPost = blogPosts.find((blogPost) => blogPost.id === params!.id);

  if (!blogPost) return { props: {} };

  const filename = blogPost.filename;
  const { content } = await getBlogPostById(filename);

  if (!content)
    return {
      props: {
        blogPost: JSON.stringify(blogPost),
      },
    };

  return {
    props: {
      blogPost: JSON.stringify(blogPost),
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getBlogPostsId();

  return {
    paths,
    fallback: 'blocking',
  };
};
