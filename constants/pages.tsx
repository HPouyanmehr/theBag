// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'John Doe',
    description:
      'theBag is a multipurpose template made by Nextjs and MUI v5 which can be used for Portfolios, Resumes, CVs, and Personal websites.',
  },
  projects: {
    title: 'Projects',
    description:
      'You can see all my projects as a designer and photographer in this page.',
  },
};

export default pages;
