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
          "Regional mental health, therapy, crisis, and support resources.",
        href: "https://www.thecentergb.org/",
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
      "Use these links for buying, building, lending, insurance, and city starting points tied to property and home setup.",
    resources: [
      {
        name: "Timber Oaks Realty",
        description:
          "Local and regional real estate starting point serving Sterling and Rice County.",
        href: "https://timberoaksrealty.com/",
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
        buttonLabel: "Visit location",
        tag: "Banking",
      },
      {
        name: "First Group Insurance",
        description:
          "Local insurance agency offering home, auto, commercial, farm, renters, and related coverage.",
        href: "https://www.insurewithus.net/contact-us.html",
        buttonLabel: "Contact agency",
        tag: "Insurance",
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
      "These are the practical public starting points for events, organizations, newcomer connection, and community participation.",
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
        name: "Golden Ticket",
        description:
          "Adult community connection and newcomer social experiences.",
        href: "https://www.sterlinggoldenticket.com",
        buttonLabel: "Visit site",
        tag: "Newcomers",
      },
      {
        name: "Sterling College",
        description:
          "College events, athletics, theatre, music, speakers, and campus life.",
        href: "https://www.sterling.edu/",
        buttonLabel: "Visit site",
        tag: "College",
      },
      {
        name: "Churches",
        description:
          "Start with Sterling Chamber Main Street for local community organizations and connection points.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit site",
        tag: "Community guide",
      },
      {
        name: "Civic groups",
        description:
          "Start with Chamber Main Street for local civic and volunteer connection points.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit site",
        tag: "Volunteer",
      },
    ],
  },
  {
    id: "recreation-outdoors",
    title: "Recreation & Outdoor Life",
    intro:
      "Go here for the public links families usually need for lake time, golf, pool season, fitness, and recreation programs.",
    resources: [
      {
        name: "Sterling Lake",
        description:
          "City starting point for Sterling Lake, parks, and outdoor public spaces.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit city site",
        tag: "Outdoors",
      },
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
      {
        name: "Water park / splash pad",
        description:
          "Use the city site as the current public starting point for community outdoor amenities.",
        href: "https://www.sterling-kansas.com/",
        buttonLabel: "Visit city site",
        tag: "City guide",
      },
    ],
  },
  {
    id: "daily-needs",
    title: "Daily Needs",
    intro:
      "This section is for the links people use once they are trying to make normal weekly life work: groceries, pharmacy, supplies, food, and local business.",
    resources: [
      {
        name: "Dillons Sterling",
        description: "Local grocery store on Broadway.",
        href: "https://www.dillons.com/stores/grocery/ks/sterling/sterling-dillons/615/00007",
        buttonLabel: "Visit store page",
        tag: "Groceries",
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
        name: "Sterling Chamber Main Street business directory",
        description:
          "Starting point for local restaurants, coffee, retail, services, and Main Street businesses.",
        href: "https://www.visitsterlingks.com/",
        buttonLabel: "Visit site",
        tag: "Business directory",
      },
      {
        name: "Home Lumber & Supply",
        description:
          "Building supplies, home projects, hardware-related support, and local materials.",
        href: "https://homelumberandsupply.com/locations/sterling/",
        buttonLabel: "Visit site",
        tag: "Hardware",
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
        description:
          "Check Cox internet availability by address.",
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
      "Use these links for childcare, enrollment, district information, college, and youth program signups.",
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
      {
        name: "Sterling Rec youth programs",
        description:
          "Youth sports, activities, recreation programs, and seasonal signups.",
        href: "https://sterlingrec.org/",
        buttonLabel: "Visit site",
        tag: "Youth programs",
      },
    ],
  },
];