import fs from 'fs';
import path from 'path';
import { remark } from 'remark';

const projectsDir = path.join(process.cwd(), 'posts/projects');

export const getProjectData = async (
  id: string
): Promise<{ content: string | null }> => {
  const projectFullpath = path.join(projectsDir, `${id}.mdx`);

  try {
    const fileContents = fs.readFileSync(projectFullpath, 'utf8');

    const processedContent = await remark().process(fileContents);
    const content = processedContent.toString();

    return {
      content,
    };
  } catch (error) {
    console.error(`error - Couldn't find ${id}.mdx file to read.`);
    return {
      content: null,
    };
  }
};

export const getAllProjectsId = () => {
  try {
    const fileNames = fs.readdirSync(projectsDir);

    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.mdx$/, ''),
        },
      };
    });
  } catch (error) {
    console.log(`error - Couldn't read this dir files: ${projectsDir}`);
  }
  return [
    {
      params: {
        id: '',
      },
    },
  ];
};
