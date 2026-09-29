export type RichSegment = {
  text: string;
  italic?: boolean;
  sub?: boolean;
};

export type NavItem = {
  id: string;
  label: string;
};

export type AboutTheme = {
  number: string;
  title: string;
  body: string;
};

export type EducationEntry = {
  degree: string;
  year: string;
  institution: string;
  result: string;
  stage: string;
};

export type Publication = {
  number: string;
  category: string;
  title: RichSegment[];
  summary: string;
  url: string | null;
};

export type TrainingEntry = {
  title: string;
  institution: string;
  icon: "palette" | "commerce" | "interior" | "communication";
};

export type AchievementEntry = {
  title: string;
  position: string;
  organizer: string;
  year: string;
};

export type ActivityEntry = {
  title: string;
  role: string;
  institution?: string;
  body: string;
};

export type LanguageEntry = {
  name: string;
  note: string | null;
};

export type ReferenceEntry = {
  name: string;
  position: string;
  institution: string;
  email: string;
};

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = (rawSiteUrl ?? "http://localhost:3000").replace(/\/+$/, "");

export const site = {
  name: "Jannatun Ferdos",
  roles: "Agriculture • Entomology • Research",
  profession: "Agriculture Graduate | Entomology Researcher | Emerging Professional",
  location: "Chapai Nawabganj, Bangladesh",
  email: "Jannatunferdos579.ebaub@gmail.com",
  phone: "+8801730183182",
  phoneHref: "tel:+8801730183182",
  address: ["21, Namorajarampur Vatopara", "Rajarampur-6301", "Chapai Nawabganj"],
  cv: {
    href: "/cv/jannatun-ferdos-cv.pdf",
    fileName: "Jannatun-Ferdos-CV.pdf",
    label: "Download CV",
  },
  portrait: {
    src: "/images/portrait.webp",
    alt: "Portrait of Jannatun Ferdos",
    width: 1000,
    height: 1250,
  },
};

export const navigation: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "training", label: "Training" },
  { id: "achievements", label: "Achievements" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Agriculture • Entomology • Research",
  name: "Jannatun Ferdos",
  firstName: "Jannatun",
  lastName: "Ferdos",
  statement:
    "Building a meaningful professional journey through agriculture, entomology research, continuous learning, and purposeful collaboration.",
  support:
    "Eager to grow in an environment that values innovation and growth, while developing professional expertise and contributing meaningfully through collaboration and continuous learning.",
  primaryCta: { label: "Explore My Research", href: "#research" },
  meta: {
    title: "MS in Entomology",
    detail: "Research & Agriculture",
  },
};

export const about = {
  title: "About Me",
  objective:
    "Eager to begin my professional journey in an environment that values innovation and growth, where I can challenge myself, collaborate with dynamic teams, and evolve into a skilled and impactful professional.",
  themes: [
    {
      number: "01",
      title: "Agriculture",
      body: "An agriculture graduate of EXIM Bank Agricultural University Bangladesh, completing a B.S. in Agriculture in 2022 with a CGPA of 3.65 out of 4.00.",
    },
    {
      number: "02",
      title: "Entomology",
      body: "An M.S. in Entomology completed in 2025 at Hajee Mohammad Danesh Science & Technology University, Dinajpur, with a CGPA of 3.75 out of 4.00.",
    },
    {
      number: "03",
      title: "Research & Continuous Learning",
      body: "Research spanning a natural mosquito repellent study and a rapeseed variability study, held alongside professional training in business, communication, design and entrepreneurship.",
    },
  ] satisfies AboutTheme[],
  focusTitle: "Professional Focus",
  focus: [
    "Agricultural Science",
    "Entomology",
    "Research",
    "Professional Development",
  ],
};

export const education: EducationEntry[] = [
  {
    degree: "M.S. in Entomology",
    year: "2025",
    institution: "Hajee Mohammad Danesh Science & Technology University, Dinajpur",
    result: "CGPA: 3.75 out of 4.00",
    stage: "Postgraduate",
  },
  {
    degree: "B.S. in Agriculture",
    year: "2022",
    institution: "EXIM Bank Agricultural University Bangladesh",
    result: "CGPA: 3.65 out of 4.00",
    stage: "Undergraduate",
  },
  {
    degree: "H.S.C in Science",
    year: "2018",
    institution: "Nawabganj Govt. Women’s College",
    result: "GPA: 3.58 out of 5.00",
    stage: "Higher Secondary",
  },
  {
    degree: "S.S.C in Science",
    year: "2016",
    institution: "Nawabganj Govt. Girls High School",
    result: "GPA: 4.89 out of 5.00",
    stage: "Secondary",
  },
];

export const research = {
  title: "Research & Publications",
  subtitle: "Exploring agricultural and entomological questions through academic research.",
  publications: [
    {
      number: "01",
      category: "Applied Entomology",
      title: [
        { text: "Evaluation of Marigold (" },
        { text: "Tagetes erecta", italic: true },
        { text: ") Leaves as a Natural Mosquito Repellent (Diptera: Culicidae)" },
      ],
      summary:
        "An evaluation of marigold leaves as a natural mosquito repellent, addressing the mosquito family Culicidae of the order Diptera.",
      url: null,
    },
    {
      number: "02",
      category: "Plant Genetics & Breeding",
      title: [
        { text: "Variability study in F" },
        { text: "2", sub: true },
        { text: " progenies of inter-varietal crosses of Rapeseed (" },
        { text: "Brassica campestris", italic: true },
        { text: " × " },
        { text: "Brassica napus", italic: true },
        { text: ")" },
      ],
      summary:
        "A variability study of the F₂ progenies arising from inter-varietal crosses of rapeseed.",
      url: null,
    },
  ] satisfies Publication[],
};

export const training = {
  title: "Training & Professional Development",
  entries: [
    {
      title: "Graphics Design and Multimedia Programming",
      institution:
        "District Based Women Computer Training Center (64 District), Chapai Nawabganj",
      icon: "palette",
    },
    {
      title: "Business Management & E-Commerce",
      institution:
        "Promotion of Women Entrepreneurs for Economic Empowerment at Grassroots Level Project, Chapai Nawabganj Sadar",
      icon: "commerce",
    },
    {
      title: "Interior Design & Event Management",
      institution:
        "Promotion of Women Entrepreneurs for Economic Empowerment at Grassroots Level Project, Chapai Nawabganj Sadar",
      icon: "interior",
    },
    {
      title: "Workplace Communication Essentials",
      institution: "Wadhwani Foundation",
      icon: "communication",
    },
  ] satisfies TrainingEntry[],
};

export const achievements = {
  title: "Achievements",
  entries: [
    {
      title: "Wearix Poster Presentation Competition",
      position: "2nd Runner Up",
      organizer: "Rajshahi University Education Club",
      year: "2024",
    },
  ] satisfies AchievementEntry[],
};

export const activities = {
  title: "Beyond Academia",
  entries: [
    {
      title: "Transparency International Bangladesh",
      role: "Former YES member",
      body: "A former YES member of Transparency International Bangladesh (TIB).",
    },
    {
      title: "Make a Smile Organization",
      role: "Member",
      institution: "EXIM Bank Agricultural University Bangladesh",
      body: "An organization working for orphan children and needy people.",
    },
  ] satisfies ActivityEntry[],
};

export const languages = {
  title: "Languages",
  entries: [
    { name: "Bangla", note: "Native" },
    { name: "English", note: null },
  ] satisfies LanguageEntry[],
};

export const references = {
  title: "Academic References",
  entries: [
    {
      name: "Dr. Hasan Fuad El Taj",
      position: "Professor",
      institution: "Hajee Mohammad Danesh Science & Technology University, Dinajpur",
      email: "fuad_eltaj@yahoo.com",
    },
    {
      name: "Md. Rifat Alam",
      position: "Lecturer",
      institution: "EXIM Bank Agricultural University Bangladesh",
      email: "rifat_ent@ebaub.ac.bd",
    },
  ] satisfies ReferenceEntry[],
};

export const contact = {
  title: "Let’s Connect",
  intro:
    "For academic correspondence, research enquiries, or opportunities to collaborate, the fastest way to reach me is by email or phone.",
};

export const seo = {
  title: "Jannatun Ferdos | Agriculture & Entomology Researcher",
  description:
    "Professional portfolio of Jannatun Ferdos, an agriculture graduate and entomology researcher with academic research, publications, professional training, and community involvement.",
};
