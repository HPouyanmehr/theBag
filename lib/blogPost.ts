import fs from 'fs';
import path from 'path';
import { remark } from 'remark';

const blogPostsDir = path.join(process.cwd(), 'posts/blog');

export const getBlogPostById = async (
  id: string
): Promise<{ content: string | null }> => {
  const blogPostFullPath = path.join(blogPostsDir, `${id}.md`);

  try {
    const fileContent = fs.readFileSync(blogPostFullPath, 'utf8');

    const processedContent = await remark().process(fileContent);
    const content = processedContent.toString();

    return {
      content,
    };
  } catch (error) {
    console.error(`error - Couldn't find ${id}.mdx file to read.`);
  }

  return {
    content: null,
  };
};

export const getBlogPostsId = () => {
  try {
    const fileNames = fs.readdirSync(blogPostsDir);

    return fileNames.map((fileName) => ({
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }));
  } catch (error) {
    console.log(`error - Couldn't read this dir files: ${blogPostsDir}`);
  }

  return [
    {
      params: {
        id: '',
      },
    },
  ];
};
