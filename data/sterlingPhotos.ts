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
    src: "/images/sterling/hero/sterling-hero-downtown-arial.jpg",
    alt: "Aerial view of downtown Sterling at sunset",
    caption: "Downtown Sterling from above",
  },
  christmas: {
    src: "/images/sterling/hero/sterling-hero-downtown-christmas.jpg",
    alt: "Downtown Sterling decorated for Christmas",
    caption: "Downtown at Christmastime",
  },
};

export const homepagePhotoStrip: SterlingPhoto[] = [
  {
    src: "/images/sterling/schools/sterling-schools-grade-school-1.jpg",
    alt: "Students gathered outside Sterling Grade School",
    caption: "School days that feel personal",
  },
  {
    src: "/images/sterling/downtown/sterling-downtown-christmas.jpg",
    alt: "Families walking through decorated downtown Sterling at Christmas",
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
    src: "/images/sterling/people/sterling-people-kids-playing.jpg",
    alt: "Kids playing together outdoors in Sterling",
    caption: "Ordinary afternoons with more margin",
  },
  {
    src: "/images/sterling/community/sterling-community-smore-church.jpg",
    alt: "Families gathered around a fire pit at a church community event",
    caption: "Community that still shows up",
  },
  {
    src: "/images/sterling/events/sterling-events-mainstreet-market.jpg",
    alt: "People walking through a Main Street market in Sterling",
    caption: "Local life that feels lived in",
  },
];

export const pictureSterlingSections: SterlingPhotoSection[] = [
  {
    id: "schools-kids",
    title: "Schools & Kids",
    photos: [
      {
        src: "/images/sterling/schools/sterling-schools-grade-school-1.jpg",
        alt: "Students gathered at Sterling Grade School",
        caption: "A school day where kids can be known",
      },
      {
        src: "/images/sterling/schools/sterling-schools-band-choir.jpg",
        alt: "Sterling students performing in band and choir",
        caption: "Music and performance are part of school life",
      },
      {
        src: "/images/sterling/people/sterling-people-grade-school-halloween-parade.jpg",
        alt: "Children taking part in a grade school Halloween parade",
        caption: "The kind of small-town tradition kids remember",
      },
      {
        src: "/images/sterling/schools/sterling-schools-forensics-champions.jpg",
        alt: "Sterling students celebrating a forensics championship",
        caption: "Students can still compete at a high level here",
      },
    ],
  },
  {
    id: "sports-game-nights",
    title: "Sports & Game Nights",
    photos: [
      {
        src: "/images/sterling/sports/sterling-sports-football.JPG",
        alt: "Sterling football under the lights",
        caption: "Friday nights still matter here",
      },
      {
        src: "/images/sterling/sports/sterling-sports-basketball-champions-1.jpg",
        alt: "Sterling basketball team celebrating a championship",
        caption: "A real winning culture in a small-town setting",
      },
      {
        src: "/images/sterling/sports/sterling-sports-jr-high-tennis.jpg",
        alt: "Junior high tennis match in Sterling",
        caption: "More ways for kids to participate",
      },
      {
        src: "/images/sterling/people/sterling-people-watching-tennis.jpg",
        alt: "People watching a tennis match together in Sterling",
        caption: "Shared evenings built around local teams",
      },
    ],
  },
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
        src: "/images/sterling/hero/sterling-hero-downtown-arial.jpg",
        alt: "Aerial view of downtown Sterling",
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
        caption: "Space for kids to move and play",
      },
      {
        src: "/images/sterling/outdoors/sterling-outdoors-sterling-lake-fishing.jpg",
        alt: "Fishing at Sterling Lake",
        caption: "A quieter pace is part of the value",
      },
      {
        src: "/images/sterling/people/sterling-people-watching-fireworks.jpg",
        alt: "People watching fireworks outdoors in Sterling",
        caption: "Outdoor nights the whole town can share",
      },
    ],
  },
  {
    id: "college-life",
    title: "College Life",
    photos: [
      {
        src: "/images/sterling/college/sterling-college-cooper-hall.jpg",
        alt: "Cooper Hall at Sterling College",
        caption: "Sterling College adds another layer of energy to town",
      },
      {
        src: "/images/sterling/college/sterling-college-speaking-event.jpg",
        alt: "Speaking event at Sterling College",
        caption: "A college town brings more ideas and events into the week",
      },
      {
        src: "/images/sterling/college/sterling-college-love-sterling.jpg",
        alt: "Students with a Love Sterling sign at Sterling College",
        caption: "Campus life spills into community life",
      },
      {
        src: "/images/sterling/college/sterling-college-warriorfest.jpg",
        alt: "Crowd gathered at Warrior Fest on the Sterling College campus",
        caption: "College events bring extra rhythm to the calendar",
      },
    ],
  },
  {
    id: "community-events",
    title: "Community Events",
    photos: [
      {
        src: "/images/sterling/events/sterling-events-mainstreet-market.jpg",
        alt: "Main Street market event in Sterling",
        caption: "Public events that help people move from new to known",
      },
      {
        src: "/images/sterling/events/sterling-events-outdoor-concert.jpg",
        alt: "Outdoor concert in Sterling",
        caption: "A town calendar that still feels local",
      },
      {
        src: "/images/sterling/events/sterling-events-golden-ticket.jpg",
        alt: "Golden Ticket event in Sterling",
        caption: "One more doorway into adult social life",
      },
      {
        src: "/images/sterling/events/sterling-events-warriorfest.jpg",
        alt: "Crowd gathered for Warrior Fest in Sterling",
        caption: "The kind of gathering people remember",
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
        src: "/images/sterling/hero/sterling-hero-downtown-arial.jpg",
        alt: "Sterling neighborhoods near downtown from above",
        caption: "A town scale that still feels manageable",
      },
    ],
  },
  {
    id: "wellness-recreation",
    title: "Wellness & Recreation",
    photos: [
      {
        src: "/images/sterling/community/sterling-community-splashpark.jpg",
        alt: "Kids playing at Sterling's splash park",
        caption: "Family recreation can be close to home",
      },
      {
        src: "/images/sterling/community/sterling-community-play.jpg",
        alt: "Kids playing together at a community event",
        caption: "Recreation is part of belonging",
      },
      {
        src: "/images/sterling/community/sterling-community-dogs.jpg",
        alt: "Neighbors gathered outdoors with dogs in Sterling",
        caption: "Even small moments feel more social here",
      },
    ],
  },
];
