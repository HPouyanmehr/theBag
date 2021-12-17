// type
import { BlogPost, BlogPostDetails } from 'types/blogPostType';

export const createPost = (props: BlogPostDetails): BlogPost => {
  const { category, date, id, image, filename, title } = props;

  return {
    category,
    date,
    id,
    image,
    filename,
    title,
    get likes() {
      return this.image.likes;
    },
  };
};
