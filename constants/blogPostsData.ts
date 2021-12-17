// dayjs
import dayjs from 'dayjs';
// lib
import { createPost } from 'lib/blogPost';
// type
import { BlogPost } from 'types/blogPostType';

const blogPosts: BlogPost[] = [
  createPost({
    category: ['photography'],
    date: dayjs().subtract(6, 'week'),
    id: 'how-to-shoot-beautiful-photos-in-sunlight',
    image: {
      alt: 'woman doing yoga meditation on brown parquet flooring',
      height: 2232,
      likes: 63,
      src: '/posts/woman doing yoga meditation on brown parquet flooring.jpg',
      width: 1920,
    },
    filename: 'how-to-shoot-beautiful-photos-in-sunlight',
    title: 'How to shoot beautiful photos in sunlight?',
  }),
];

export default blogPosts;
