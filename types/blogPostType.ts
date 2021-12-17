// type
import { Dayjs } from 'dayjs';

import { BlogPostCategory } from 'types/categoryType';
import { ImageProps } from 'types/imageType';

export interface BlogPostDetails {
  category: BlogPostCategory[];
  date: Dayjs;
  id: string;
  image: ImageProps;
  filename: string;
  title: string;
}

export interface BlogPost extends BlogPostDetails {
  likes: number;
}
