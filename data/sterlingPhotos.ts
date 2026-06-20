export type SterlingPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type SterlingPhotoSection = {
  id: string;
  title: string;
  photos: SterlingPhoto[];
};

export const sterlingHeroPhotos = {
  aerial: {
    src: "/images/sterling/hero/Sterling_Kansas_Skyline.jpg",
    alt: "Skyline view of Sterling, Kansas",
    caption: "Sterling from above",
  },
  christmas: {
    src: "/images/sterling/downtown/sterling-downtown-christmas.jpg",
    alt: "Downtown Sterling decorated for Christmas",
    caption: "Downtown at Christmastime",
  },
};

export const homepagePhotoStrip: SterlingPhoto[] = [
  {
    src: "/images/sterling/hero/Sterling_Kansas_Skyline.jpg",
    alt: "Skyline view of Sterling, Kansas",
    caption: "A town with a real center",
  },
  {
    src: "/images/sterling/downtown/sterling-downtown-christmas.jpg",
    alt: "Downtown Sterling decorated at Christmas",
    caption: "Main Street traditions",
  },
  {
    src: "/images/sterling/outdoors/sterling-outdoors-sterling-lake.jpg",
    alt: "Sterling Lake on a calm day",
    caption: "Room to breathe near the lake",
  },
];

export const storyPhotoStrip: SterlingPhoto[] = [
  {
    src: "/images/sterling/downtown/sterling-downtown-mural-1.jpg",
    alt: "Downtown Sterling mural along Broadway",
    caption: "A Main Street that still feels lived in",
  },
  {
    src: "/images/sterling/housing/sterling-housing-all-american-house.jpg",
    alt: "Neighborhood home in Sterling",
    caption: "Ordinary neighborhoods with room to breathe",
  },
  {
    src: "/images/sterling/outdoors/sterling-outdoors-sterling-lake.jpg",
    alt: "Sterling Lake on a calm day",
    caption: "The kind of pace people are looking for",
  },
];

export const pictureSterlingSections: SterlingPhotoSection[] = [
  {
    id: "downtown-local-life",
    title: "Downtown & Local Life",
    photos: [
      {
        src: "/images/sterling/downtown/sterling-downtown-mural-1.jpg",
        alt: "Downtown Sterling mural along Broadway",
        caption: "A Main Street that still feels lived in",
      },
      {
        src: "/images/sterling/hero/Sterling_Kansas_Skyline.jpg",
        alt: "Skyline view of Sterling, Kansas",
        caption: "A small town with a real center",
      },
      {
        src: "/images/sterling/downtown/sterling-downtown-christmas.jpg",
        alt: "Downtown Sterling decorated for a Christmas event",
        caption: "Simple traditions that make a place feel like home",
      },
    ],
  },
  {
    id: "outdoors",
    title: "Parks, Lake & Outdoors",
    photos: [
      {
        src: "/images/sterling/outdoors/sterling-outdoors-sterling-lake.jpg",
        alt: "View across Sterling Lake",
        caption: "An ordinary evening can end near the lake",
      },
      {
        src: "/images/sterling/outdoors/sterling-outdoors-sterling-lake-playground.jpg",
        alt: "Playground near Sterling Lake",
        caption: "Outdoor space close to everyday life",
      },
      {
        src: "/images/sterling/outdoors/sterling-outdoors-4th-of-july-fireworks.jpg",
        alt: "Fireworks over the outdoors in Sterling",
        caption: "Outdoor evenings still feel like something here",
      },
    ],
  },
  {
    id: "college-campus",
    title: "College Campus",
    photos: [
      {
        src: "/images/sterling/college/sterling-college-cooper-hall.jpg",
        alt: "Cooper Hall at Sterling College",
        caption: "Sterling College adds another layer of energy to town",
      },
    ],
  },
  {
    id: "housing-neighborhoods",
    title: "Housing & Neighborhoods",
    photos: [
      {
        src: "/images/sterling/housing/sterling-housing-all-american-house.jpg",
        alt: "Neighborhood home in Sterling",
        caption: "The goal is not just a house. It is the life around it",
      },
      {
        src: "/images/sterling/hero/Sterling_Kansas_Skyline.jpg",
        alt: "Sterling neighborhoods near downtown from above",
        caption: "A town scale that still feels manageable",
      },
    ],
  },
];
