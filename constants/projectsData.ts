// type
interface projectImage {
  alt: string;
  height: number;
  likes: number;
  src: string;
  width: number;
}

export interface ProjectDetails {
  date: Date;
  id: string;
  images: projectImage[];
  title: string;
}

const projectsData: ProjectDetails[] = [
  {
    date: new Date(2020, 5, 2),
    id: 'BridePhotoshoot-1',
    title: 'Bride photoshoot',
    images: [
      {
        alt: 'woman in white tank top wearing silver necklace',
        width: 6000,
        height: 4000,
        likes: 42,
        src: '/projects/bride/joeyy-lee-j0p4xYW2IVw-unsplash.jpg',
      },
      {
        alt: 'woman in white wedding dress standing on stairs',
        width: 6000,
        height: 4000,
        likes: 59,
        src: '/projects/bride/joeyy-lee-0wIWcXIh24M-unsplash.jpg',
      },
      {
        alt: 'woman in white sleeveless top wearing silver necklace',
        width: 6000,
        height: 4000,
        likes: 34,
        src: '/projects/bride/joeyy-lee-ST2AcGYQ090-unsplash.jpg',
      },
      {
        alt: 'woman in white wedding dress',
        width: 6000,
        height: 4000,
        likes: 28,
        src: '/projects/bride/joeyy-lee--vPL7Ds6wiI-unsplash.jpg',
      },
      {
        alt: 'woman in white tank top holding her hair',
        width: 6000,
        height: 4000,
        likes: 93,
        src: '/projects/bride/joeyy-lee-_Ie8ckXb3WI-unsplash.jpg',
      },
      {
        alt: 'woman in white sleeveless dress',
        width: 6000,
        height: 4000,
        likes: 133,
        src: '/projects/bride/joeyy-lee-ugNxKaQe9ec-unsplash.jpg',
      },
      {
        alt: 'woman in white floral tank top with white flower on ear',
        width: 6000,
        height: 4000,
        likes: 77,
        src: '/projects/bride/joeyy-lee-y56-YywiKUA-unsplash.jpg',
      },
    ],
  },
];

export default projectsData;
