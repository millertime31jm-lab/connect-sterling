export type ResourceItem = {
  name: string;
  description: string;
  href: string;
  buttonLabel: string;
  tag?: string;
};

export type ResourceCategory = {
  id: string;
  title: string;
  intro: string;
  resources: ResourceItem[];
};

const askHref = "/ask-connect-sterling#ask-form";

export const resourceCategories: ResourceCategory[] = [
  {
    id: "care-wellness",
    title: "Everyday Care & Wellness",
    intro:
      "Start here for fitness, basic care, and the local and regional health questions people usually ask first.",
    resources: [
      {
        name: "Sterling Community Wellness Center",
        description:
          "Fitness, cardio, weights, classes, sauna, HydroMassage, and wellness access through Sterling Recreation Commission.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit Website",
        tag: "Fitness",
      },
      {
        name: "Higher Grounds Training",
        description:
          "If you want current training or coaching information, Connect Sterling can point you to the best local starting point.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Local intro",
      },
      {
        name: "Sterling Medical Center",
        description:
          "Use Connect Sterling if you want the current local clinic starting point or help sorting everyday care options.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Medical",
      },
      {
        name: "Rice County Regional Medical Center",
        description:
          "For broader regional care questions, Connect Sterling can help point you toward the right starting contact.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Regional care",
      },
      {
        name: "Mental health resources",
        description:
          "Need counseling or mental health support options? Ask Connect Sterling for the best current local or regional starting point.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Support",
      },
      {
        name: "Pharmacy",
        description:
          "If you are trying to sort pharmacy options in or near Sterling, Connect Sterling can help route you quickly.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Daily care",
      },
      {
        name: "Dental, chiropractic, and physical therapy",
        description:
          "Ask Connect Sterling for the current local and nearby providers people most often use.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Provider list",
      },
    ],
  },
  {
    id: "housing-home-services",
    title: "Housing, Building & Home Services",
    intro:
      "These are the first clicks for buying, building, home supplies, and getting into the right local housing conversation.",
    resources: [
      {
        name: "Timber Oaks Realty",
        description:
          "Sterling-based real estate office with local market knowledge and Rice County roots.",
        href: "https://timberoaksrealty.com/",
        buttonLabel: "Visit Website",
        tag: "Realtor",
      },
      {
        name: "Homes.com Sterling agent list",
        description:
          "Public list of agents serving Sterling if you want a wider look at local and nearby options.",
        href: "https://www.homes.com/real-estate-agents/sterling-ks/",
        buttonLabel: "Visit Website",
        tag: "Realtor list",
      },
      {
        name: "Realtor.com Sterling agent list",
        description:
          "Another practical starting point if you want to compare agents serving the Sterling market.",
        href: "https://www.realtor.com/realestateagents/sterling_ks",
        buttonLabel: "Visit Website",
        tag: "Realtor list",
      },
      {
        name: "Hood Construction",
        description:
          "Sterling contractor for residential and commercial new builds, additions, remodels, decks, siding, windows, and more.",
        href: "https://hoodconstructionks.com",
        buttonLabel: "Visit Website",
        tag: "Builder",
      },
      {
        name: "Home Lumber & Supply",
        description:
          "Broadway building supply resource for materials, advice, and quotes for homeowners and professionals.",
        href: "https://homelumberandsupply.com/locations/sterling/",
        buttonLabel: "Visit Website",
        tag: "Building supply",
      },
      {
        name: "Banks and lenders",
        description:
          "If you want the right local conversation for financing or pre-approval, Connect Sterling can help point you there.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Financing",
      },
      {
        name: "Insurance",
        description:
          "Need a local starting point for home, auto, or property coverage? Ask Connect Sterling and we will help route you.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Coverage",
      },
      {
        name: "City building and utility information",
        description:
          "Start here for city processes, utilities, and questions that may affect building, service setup, or property decisions.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit Website",
        tag: "City",
      },
    ],
  },
  {
    id: "community-life",
    title: "Community Life",
    intro:
      "These are the easiest starting points for getting plugged into groups, events, volunteer life, and adult connection.",
    resources: [
      {
        name: "Sterling Recreation Commission",
        description:
          "Youth sports, leagues, recreation programs, wellness, and a lot of the family rhythm people plug into first.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit Website",
        tag: "Recreation",
      },
      {
        name: "Sterling Chamber Main Street",
        description:
          "Main Street events, community connections, local business information, and a strong public starting point for Sterling life.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit Website",
        tag: "Community",
      },
      {
        name: "Golden Ticket",
        description:
          "Adult connection and newcomer invitations that help people meet others faster and try local experiences.",
        href: "https://www.sterlinggoldenticket.com",
        buttonLabel: "Visit Website",
        tag: "Newcomers",
      },
      {
        name: "Churches and faith community",
        description:
          "If you want a church home, youth group, or a place to start asking around, Connect Sterling can point you to local options.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Faith",
      },
      {
        name: "Rotary, Lions, and civic groups",
        description:
          "Ask Connect Sterling if you want the best current civic-service starting point in town.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Civic life",
      },
      {
        name: "Volunteer opportunities",
        description:
          "The Chamber is a good first stop for community life, and Connect Sterling can also help route specific volunteer interests.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit Website",
        tag: "Service",
      },
    ],
  },
  {
    id: "recreation-outdoors",
    title: "Recreation & Outdoor Life",
    intro:
      "Use these links for the places and programs families usually want once they are settling into normal life.",
    resources: [
      {
        name: "Sterling Lake",
        description:
          "A practical local starting point for lake questions, nearby recreation, and outdoor family time.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit Website",
        tag: "Outdoors",
      },
      {
        name: "Sterling Pool",
        description:
          "Pool information and the city page that points families toward Sterling Rec for swim lesson details.",
        href: "https://www.sterling-kansas.com/266/Municipal-Swimming-Pool",
        buttonLabel: "Visit Website",
        tag: "Summer",
      },
      {
        name: "Sterling Country Club",
        description:
          "If you want current golf or membership information, Connect Sterling can help point you to the right local starting point.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Golf",
      },
      {
        name: "Parks and trails",
        description:
          "Use the city site for general community information, or ask Connect Sterling if you want the best current local starting point.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit Website",
        tag: "Local guide",
      },
      {
        name: "Sterling Rec programs",
        description:
          "Classes, leagues, youth programs, wellness, and recreation calendars all start here.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit Website",
        tag: "Programs",
      },
    ],
  },
  {
    id: "daily-needs",
    title: "Daily Needs",
    intro:
      "These are the kinds of practical starting points people ask for when they are figuring out normal week-to-week life.",
    resources: [
      {
        name: "Dillons",
        description:
          "If you want the quickest current grocery starting point in Sterling, ask Connect Sterling and we will point you there.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Groceries",
      },
      {
        name: "Local pharmacy",
        description:
          "Need to sort everyday pharmacy access? Connect Sterling can point you toward the current best local starting point.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Health",
      },
      {
        name: "Restaurants and coffee",
        description:
          "The Chamber Main Street site is the strongest public starting point for local business and downtown activity.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit Website",
        tag: "Food & drink",
      },
      {
        name: "Home Lumber & Supply",
        description:
          "A direct local starting point for hardware, materials, and home-project needs.",
        href: "https://homelumberandsupply.com/locations/sterling/",
        buttonLabel: "Visit Website",
        tag: "Hardware",
      },
      {
        name: "Auto and local service help",
        description:
          "If you need help finding trusted local service providers, Connect Sterling can help route you.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Services",
      },
      {
        name: "Main Street business directory",
        description:
          "A useful public starting point for downtown businesses, events, and local services.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit Website",
        tag: "Directory",
      },
    ],
  },
  {
    id: "utilities-internet",
    title: "Utilities & Internet",
    intro:
      "The practical rule here is simple: start with the city for core service information, then verify internet by address before you choose a specific home.",
    resources: [
      {
        name: "City utilities",
        description:
          "Start with the city for utility setup, service questions, and the basic local information most new residents need first.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit Website",
        tag: "Utilities",
      },
      {
        name: "Cox",
        description:
          "Availability and speed depend on the address, so Connect Sterling can help point you toward the best next step.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Internet",
      },
      {
        name: "Brightspeed",
        description:
          "If you are comparing internet options by address, ask Connect Sterling and we will help you sort the local picture.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Internet",
      },
      {
        name: "MTC",
        description:
          "Need help figuring out whether MTC is a fit for a specific address or move? Connect Sterling can help route that question.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Internet",
      },
      {
        name: "Trash and recycling",
        description:
          "Start with the city site if you need the current public-service information for Sterling.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit Website",
        tag: "City services",
      },
      {
        name: "Water, electric, and gas questions",
        description:
          "The city is the best public starting point, and Connect Sterling can help if your setup question is more specific.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit Website",
        tag: "Setup",
      },
    ],
  },
  {
    id: "schools-childcare",
    title: "Schools & Childcare",
    intro:
      "Keep this page practical: these are the links and starting points that help families move from general interest to actual next steps.",
    resources: [
      {
        name: "Lil Cub Childcare",
        description:
          "Childcare is one of the first practical questions many families need answered. Connect Sterling can help point you toward the current starting point.",
        href: askHref,
        buttonLabel: "Ask Connect Sterling",
        tag: "Childcare",
      },
      {
        name: "USD 376 enrollment",
        description:
          "Go straight to the district enrollment page if you are ready to look at school next steps.",
        href: "https://www.usd376.com/page/enrollment",
        buttonLabel: "Visit Website",
        tag: "Enrollment",
      },
      {
        name: "Sterling College",
        description:
          "Academics, admissions, campus life, and the college layer that adds extra energy to Sterling.",
        href: "https://www.sterling.edu/",
        buttonLabel: "Visit Website",
        tag: "College",
      },
      {
        name: "Sterling Rec youth programs",
        description:
          "A practical starting point for youth sports, leagues, and family recreation programs.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit Website",
        tag: "Youth programs",
      },
      {
        name: "School calendar and district information",
        description:
          "Use USD 376 for calendars, district updates, and the broad picture of school life.",
        href: "https://www.usd376.com/",
        buttonLabel: "Visit Website",
        tag: "School life",
      },
      {
        name: "Black Bear athletics",
        description:
          "Go here for athletics information, schedules, and one of the most visible parts of Sterling school culture.",
        href: "https://www.usd376.com/o/usd-376/page/athletics",
        buttonLabel: "Visit Website",
        tag: "Athletics",
      },
    ],
  },
];
