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

export const resourceCategories: ResourceCategory[] = [
  {
    id: "care-wellness",
    title: "Everyday Care & Wellness",
    intro:
      "Start here for fitness, local care, pharmacy, and regional support resources people ask about first.",
    resources: [
      {
        name: "Sterling Community Wellness Center",
        description:
          "Fitness and wellness facility through Sterling Rec with cardio equipment, weights, classes, sauna, HydroMassage, and memberships.",
        href: "https://sterlingrec.org/wellness-center/",
        buttonLabel: "Visit site",
        tag: "Wellness",
      },
      {
        name: "Sterling Recreation Commission",
        description:
          "Youth sports, recreation programs, wellness opportunities, leagues, classes, and activities.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit site",
        tag: "Recreation",
      },
      {
        name: "Sterling Family Care / Sterling Medical Center",
        description:
          "Local family care clinic in Sterling through Rice Community Health.",
        href: "https://ricecommunityhealth.com/contact-us/",
        buttonLabel: "Contact clinic",
        tag: "Medical",
      },
      {
        name: "Rice Community Hospital",
        description:
          "Rice County hospital in Lyons with emergency, outpatient, imaging, and broader regional healthcare services.",
        href: "https://ricecommunityhealth.com/rice-community-hospital/",
        buttonLabel: "Visit site",
        tag: "Hospital",
      },
      {
        name: "Sterling Pharmacy",
        description: "Local hometown pharmacy on Broadway.",
        href: "https://www.visitsterlingks.com/connections/76317-sterling-pharmacy",
        buttonLabel: "Visit listing",
        tag: "Pharmacy",
      },
      {
        name: "Mental health resources",
        description:
          "Local therapy and mental health support resource serving the Sterling area.",
        href: "https://www.pivotalpointtherapy.com/",
        buttonLabel: "Visit site",
        tag: "Support",
      },
      {
        name: "Higher Tactics",
        description:
          "Local fitness and training resource serving Sterling-area athletes, adults, and families.",
        href: "https://highertactics.com/",
        buttonLabel: "Visit site",
        tag: "Training",
      },
    ],
  },
  {
    id: "housing-home-services",
    title: "Housing, Building & Home Services",
    intro:
      "Use these links for buying, building, lending, insurance, rentals, and city starting points tied to property and home setup.",
    resources: [
      {
        name: "Timber Oaks Realty",
        description:
          "Local and regional real estate starting point serving Sterling and Rice County.",
        href: "https://www.timberoaks-realty.com/team-4",
        buttonLabel: "Visit site",
        tag: "Real estate",
      },
      {
        name: "Homes.com Sterling agent list",
        description: "Public agent directory for the Sterling market.",
        href: "https://www.homes.com/real-estate-agents/sterling-ks/",
        buttonLabel: "View agents",
        tag: "Directory",
      },
      {
        name: "Realtor.com Sterling agent list",
        description: "Public real estate agent directory for Sterling.",
        href: "https://www.realtor.com/realestateagents/sterling_ks",
        buttonLabel: "View agents",
        tag: "Directory",
      },
      {
        name: "Hood Construction",
        description:
          "Sterling-based builder and contractor for new builds, additions, remodels, decks, porches, windows, doors, and more.",
        href: "https://hoodconstructionks.com/",
        buttonLabel: "Visit site",
        tag: "Builder",
      },
      {
        name: "Home Lumber & Supply",
        description:
          "Sterling building supply resource for materials, quotes, and project support.",
        href: "https://homelumberandsupply.com/locations/sterling/",
        buttonLabel: "Visit site",
        tag: "Supply",
      },
      {
        name: "First Bank",
        description:
          "Sterling banking location with personal, business, mortgage, and lending services.",
        href: "https://www.first-bank.net/",
        buttonLabel: "Visit site",
        tag: "Banking",
      },
      {
        name: "Bank of the Plains",
        description:
          "Sterling banking location for personal banking, business banking, lending, and local financial services.",
        href: "https://www.bankoftheplains.com/locations/sterling",
        buttonLabel: "Visit site",
        tag: "Banking",
      },
      {
        name: "First Group Insurance",
        description:
          "Local insurance agency offering home, auto, commercial, farm, renters, and related coverage.",
        href: "https://www.insurewithus.net/contact-us.html",
        buttonLabel: "Visit site",
        tag: "Insurance",
      },
      {
        name: "Farm Bureau Financial Services - Teresa Boeken",
        description:
          "Local Farm Bureau agent offering insurance and financial services for families, homes, farms, and businesses.",
        href: "https://www.fbfs.com/find-an-agent/teresaboeken?y_source=1_MTAzNDg5OTI0MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
        buttonLabel: "Visit site",
        tag: "Insurance",
      },
      {
        name: "M&A Property Management",
        description:
          "Local rental and property management starting point for housing options in the Sterling area.",
        href: "https://www.facebook.com/rentalmanagaementforyou/",
        buttonLabel: "Visit page",
        tag: "Rentals",
      },
      {
        name: "City of Sterling utilities / building starting point",
        description:
          "City information for local processes, services, utilities, and civic questions.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit city site",
        tag: "City",
      },
    ],
  },
  {
    id: "community-life",
    title: "Community Life",
    intro:
      "These are the practical public starting points for events, organizations, and everyday community participation.",
    resources: [
      {
        name: "Sterling Chamber Main Street",
        description:
          "Main Street, events, local business, community connection, and Chamber resources.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit site",
        tag: "Community",
      },
      {
        name: "Sterling Recreation Commission",
        description:
          "Youth sports, recreation, activities, wellness, and family connection.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit site",
        tag: "Recreation",
      },
      {
        name: "Sterling College",
        description:
          "College events, athletics, theatre, music, speakers, and campus life.",
        href: "https://www.sterling.edu/",
        buttonLabel: "Visit site",
        tag: "College",
      },
    ],
  },
  {
    id: "churches",
    title: "Churches",
    intro:
      "Sterling has a strong faith community. Use these links to explore local churches, worship times, youth activities, and connection points.",
    resources: [
      {
        name: "Calvary Baptist Church",
        description:
          "Local church in Sterling with worship, teaching, and community connection.",
        href: "https://calvarybaptistofsterling.com/",
        buttonLabel: "Visit site",
      },
      {
        name: "CrossPoint Church",
        description:
          "Local church community with worship, groups, and ministries.",
        href: "https://crosspointchurch.com/",
        buttonLabel: "Visit site",
      },
      {
        name: "Encounter Church Sterling",
        description:
          "Local church community in Sterling with worship and connection opportunities.",
        href: "https://www.encounterchurchsterling.com/",
        buttonLabel: "Visit site",
      },
      {
        name: "First United Methodist Church",
        description:
          "Local Methodist church with worship, ministries, and community connection.",
        href: "https://sterlingfirst.org/",
        buttonLabel: "Visit site",
      },
      {
        name: "Sterling Bible Church",
        description:
          "Local Bible church with worship, teaching, and community life.",
        href: "https://www.sterlingbible.org/",
        buttonLabel: "Visit site",
      },
      {
        name: "Sterling Church of Christ",
        description:
          "Local church community with updates and connection information on Facebook.",
        href: "https://www.facebook.com/sterlingchurchofchrist",
        buttonLabel: "Visit page",
      },
      {
        name: "United Presbyterian Church",
        description:
          "Local Presbyterian church with worship, ministries, and community connection.",
        href: "https://upcsterling.com/",
        buttonLabel: "Visit site",
      },
    ],
  },
  {
    id: "recreation-outdoors",
    title: "Recreation & Outdoor Life",
    intro:
      "Go here for the direct public links families usually need for pool season, fitness, golf, and recreation programs.",
    resources: [
      {
        name: "Sterling Municipal Pool",
        description:
          "City pool information and seasonal swimming resource.",
        href: "https://www.sterling-kansas.com/266/Municipal-Swimming-Pool",
        buttonLabel: "View pool info",
        tag: "Swimming",
      },
      {
        name: "Sterling Recreation Commission",
        description:
          "Recreation programs, youth sports, wellness, and activities.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit site",
        tag: "Programs",
      },
      {
        name: "Sterling Community Wellness Center",
        description:
          "Fitness and wellness facility through Sterling Rec.",
        href: "https://sterlingrec.org/wellness-center/",
        buttonLabel: "Visit site",
        tag: "Fitness",
      },
      {
        name: "Sterling Country Club",
        description:
          "Public golf course and community golf resource.",
        href: "https://www.sterlingcountryclub.com/",
        buttonLabel: "Visit site",
        tag: "Golf",
      },
    ],
  },
  {
    id: "daily-needs",
    title: "Daily Needs",
    intro:
      "This section is for the links people use once they are trying to make normal weekly life work: groceries, convenience stops, coffee, restaurants, and local business.",
    resources: [
      {
        name: "Dillons Sterling",
        description: "Local grocery store on Broadway.",
        href: "https://www.dillons.com/stores/grocery/ks/sterling/sterling-dillons/615/00007",
        buttonLabel: "Visit store page",
        tag: "Groceries",
      },
      {
        name: "Dollar General",
        description:
          "Everyday household goods, basic groceries, and convenience items in Sterling.",
        href: "https://www.dollargeneral.com/store-directory/ks/sterling/11441",
        buttonLabel: "Visit store page",
        tag: "Everyday goods",
      },
      {
        name: "Casey's",
        description:
          "Convenience store, fuel, pizza, and quick daily needs.",
        href: "https://www.caseys.com/",
        buttonLabel: "Visit site",
        tag: "Convenience",
      },
      {
        name: "Rural Market",
        description:
          "Online market and local ordering resource connected to Central Prairie Co-op.",
        href: "https://market.cpcoop.us/",
        buttonLabel: "Visit market",
        tag: "Ordering",
      },
      {
        name: "Central Prairie Co-op",
        description:
          "Local cooperative serving agriculture, energy, retail, and community needs.",
        href: "https://www.cpcoop.us/",
        buttonLabel: "Visit site",
        tag: "Co-op",
      },
      {
        name: "Sterling Pharmacy",
        description:
          "Local pharmacy with prescription and pharmacy services.",
        href: "https://www.visitsterlingks.com/connections/76317-sterling-pharmacy",
        buttonLabel: "Visit listing",
        tag: "Pharmacy",
      },
      {
        name: "Dos Amigos",
        description: "Local Mexican restaurant in Sterling.",
        href: "https://www.facebook.com/dosamigosrestaurantKS/",
        buttonLabel: "Visit page",
        tag: "Restaurant",
      },
      {
        name: "Sterling Cafe",
        description: "Local cafe and restaurant serving Sterling.",
        href: "https://www.facebook.com/SterlingCafe1945",
        buttonLabel: "Visit page",
        tag: "Cafe",
      },
      {
        name: "Buster's Burgers",
        description: "Local burger restaurant in Sterling.",
        href: "https://www.burgersbybuster.com/",
        buttonLabel: "Visit site",
        tag: "Restaurant",
      },
      {
        name: "Gambino's Pizza",
        description: "Pizza restaurant serving Sterling.",
        href: "https://gambinospizza.com/locations/sterling-ks/",
        buttonLabel: "Visit site",
        tag: "Pizza",
      },
      {
        name: "Clive's Staples",
        description: "Local coffee, food, and gathering place in Sterling.",
        href: "https://clivesstaples.com/",
        buttonLabel: "Visit site",
        tag: "Coffee",
      },
      {
        name: "TNT Dairyland",
        description: "Local ice cream, food, and family-friendly stop.",
        href: "https://www.tntdairyland.com/",
        buttonLabel: "Visit site",
        tag: "Food",
      },
      {
        name: "Sterling Chamber Main Street business directory",
        description:
          "Starting point for local restaurants, coffee, retail, services, and Main Street businesses.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit site",
        tag: "Business directory",
      },
    ],
  },
  {
    id: "utilities-internet",
    title: "Utilities & Internet",
    intro:
      "These are the direct utility and internet starting points. Verify internet availability by address before you choose a specific home.",
    resources: [
      {
        name: "City of Sterling Public Utilities",
        description:
          "Water, electric, sewer, refuse, utility setup, billing, and city utility information.",
        href: "https://www.sterling-kansas.com/609/Public-Utilities",
        buttonLabel: "View utilities",
        tag: "Utilities",
      },
      {
        name: "Brightspeed Sterling",
        description:
          "Fiber internet availability and plans for Sterling addresses.",
        href: "https://www.brightspeed.com/local/ks/sterling",
        buttonLabel: "Check availability",
        tag: "Internet",
      },
      {
        name: "MTC Sterling",
        description:
          "Local internet and phone service options for Sterling.",
        href: "https://mtc4me.com/sterling/",
        buttonLabel: "Check availability",
        tag: "Internet",
      },
      {
        name: "Cox availability",
        description: "Check Cox internet availability by address.",
        href: "https://www.cox.com/residential/internet.html",
        buttonLabel: "Check availability",
        tag: "Internet",
      },
    ],
  },
  {
    id: "schools-childcare",
    title: "Schools & Childcare",
    intro:
      "Use these links for childcare, enrollment, district information, and college starting points.",
    resources: [
      {
        name: "Lil Cub Childcare",
        description:
          "Local childcare and preschool provider in Sterling.",
        href: "https://lilcubchildcare.weebly.com/",
        buttonLabel: "Visit site",
        tag: "Childcare",
      },
      {
        name: "USD 376 Enrollment",
        description:
          "Enrollment information for Sterling Public Schools.",
        href: "https://www.usd376.com/page/enrollment",
        buttonLabel: "View enrollment",
        tag: "Enrollment",
      },
      {
        name: "USD 376 District",
        description:
          "District information, schools, activities, and updates.",
        href: "https://www.usd376.com/",
        buttonLabel: "Visit district",
        tag: "District",
      },
      {
        name: "Sterling College",
        description:
          "Higher education, athletics, events, theatre, music, and college-town activity.",
        href: "https://www.sterling.edu/",
        buttonLabel: "Visit site",
        tag: "College",
      },
    ],
  },
];
