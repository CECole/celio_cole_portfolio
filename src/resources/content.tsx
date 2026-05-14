import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Celio",
  lastName: "Cole",
  name: `Celio Cole`,
  role: "Product Designer (UX/UI) + Creative Developer · Next.js · Three.js · GSAP",
  avatar: "/images/avatar.jpg",
  email: "celioocole@gmail.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English", "Catala"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>
    to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CECole",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/celio-esteban-zamudio-cole-45b502124/",
    essential: true,
  },
  /* { {
     name: "Instagram",
     icon: "instagram",
     link: "https://www.instagram.com/once_ui/",
     essential: false,
   },
     name: "Threads",
     icon: "threads",
     link: "https://www.threads.com/@once_ui",
     essential: true,
   },*/
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Celio, a Product Designer (UX/UI) + Creative Developer  at <Text as="span" size="xl" weight="strong">celiocole.com</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Celio is a Barcelona-based Product Designer + Creative Developer  with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelancer",
        timeframe: "September 2025 – Present ",
        role: "UI/UX & Front-End Designer | Freelance ",
        achievements: [
          <>
            · End-to-end digital product design, from defining user flows to the final interface.
            · Advanced prototyping in Figma + Tailwind to validate interaction and usability.
            · Front-end development with Next.js, Three.js, and GSAP for interactive experiences.
            · Creation of design systems and reusable components.
            · Direct collaboration with clients and developers to ensure technical feasibility.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Latin Palace Barcelona",
        timeframe: "2018 - 2022",
        role: "Creative Design / UI Designer ",
        achievements: [
          <>
            · Redesign of conversion-focused landing pages.
            · Improved visual hierarchy and navigation in digital environments.
            · Design of campaigns and visual assets.
            · Collaborated with marketing and development teams.
          </>,
        ],
        images: [],
      },
      {
        company: "PROMAD",
        timeframe: "November 2019 – August 2020",
        role: "Product Designer (UX/UI)",
        achievements: [
          <>
            · Redesigned the emergency management alert platform (C5).
            · Streamlined workflows in high-pressure scenarios.
            · Prioritized critical information to improve decision-making.
            · Design based on user feedback and QA.
          </>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "AsTecI S.A. de C.V.",
        timeframe: "May 2019 – November 2019",
        role: "Senior Front-End / UX UI Developer",
        achievements: [
          <>
            · Experience in corporate and enterprise environments.
            · Front-end development using Angular and Material Design.
            · Design of user interfaces and reusable components.
            · Worked on agile teams and large-scale projects.
          </>,
        ],
        images: [],
      },
      {
        company: "GLOBAL HITSS",
        timeframe: "September 2025 – Present ",
        role: "Front-End Developer / UX UI",
        achievements: [
          <>
            · Design of fintech products (Santander, Actinver).
            · Creation of financial simulators and complex forms.
            · Development of interfaces using Angular + Material Design.
            · Collaboration in agile teams.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Byronmuller",
        timeframe: "June 2017 – October 2017",
        role: "Front-End Developer",
        achievements: [
          <>
            · Converting designs into front-end code.
            · Developing responsive websites using HTML5, CSS3, Bootstrap, and jQuery.
            · Basic implementation of animations and interactions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Virket Group",
        timeframe: "June 2015 – April 2016",
        role: "Web Designer & Front-End Developer",
        achievements: [
          <>
            · Web development and layout using HTML, CSS, JavaScript, and jQuery.
            · Implementation of websites on WordPress and Shopify.
            · Basic performance optimization and technical SEO.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Barcelona",
        description: <>Certificate in Digital Marketing from the Interactive Advertising Bureau.</>,
      },
      {
        name: "System Training Centers - UCLES",
        description: <>Graphic Design Technician, Graphic Design.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI, Tailwind CSS with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Vite + Tailwind CSS.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwaindcss",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Angular",
        description: (
            <>Building next gen apps with Angular or Material Design + Bootstrap + Three.js.</>
        ),
        tags: [
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "Three.js",
            icon: "threejs",
          },
          {
            name: "SCSS",
            icon: "scss",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
            <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
