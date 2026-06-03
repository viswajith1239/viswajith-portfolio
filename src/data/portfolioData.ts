export interface Stat {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  // live: string;
  imageType: 'netflix' | 'amazon' | 'olx' | 'todo' | 'employee' | 'cart'| 'doctor'|"fashion"|"blog"|"chat";
}

export interface TimelineItem {
  id: string;
  role: string;
  companyOrInstitution: string;
  period: string;
  description: string;
  type: 'experience' | 'education';
  website?: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
}

export const developerInfo = {
  name: "Viswajith K K",
  role: "MERN Stack Developer",
  description: "I build responsive, premium-grade full-stack web applications with modern design systems and optimized backend architectures.",
  resumeUrl: "./resume.pdf", // Placeholder for actual resume download
  socials: {
    linkedin: "https://www.linkedin.com/in/viswajith-kk-b64609277",
    github: "https://github.com/viswajith1239",
    leetcode: "https://leetcode.com/u/_viswa_jith_k_k",
    email: "mailto:viswajithkanayi@gmail.com"
  }
};

export const stats: Stat[] = [
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Learned", value: "12+" },
  { label: "Freelance Availability", value: "Available" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, iconName: "FaReact" },
      { name: "TypeScript", level: 85, iconName: "SiTypescript" },
      { name: "Tailwind CSS", level: 95, iconName: "SiTailwindcss" },
      { name: "Redux Toolkit", level: 80, iconName: "SiRedux" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88, iconName: "FaNodeJs" },
      { name: "Express.js", level: 90, iconName: "SiExpress" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85, iconName: "SiMongodb" },
      { name: "PostgreSQL", level: 80, iconName: "SiPostgresql" }
    ]
  },
  {
    title: "Other Tools & Tech",
    skills: [
      { name: "Git", level: 90, iconName: "FaGitAlt" },
      // { name: "Cloudinary", level: 80, iconName: "SiCloudinary" },
      { name: "AWS", level: 80, iconName: "FaAws" },
      { name: "Razorpay", level: 75, iconName: "FaCreditCard" },
      { name: "JWT Auth", level: 90, iconName: "SiJsonwebtokens" },
      { name: "Socket.IO", level: 85, iconName: "SiSocketdotio" },
      
    ]
  }
];

export const projects: Project[] = [
  
  
  {
  id: "1",
  title: "WeCare - Doctor Booking Platform",
  description:
    "A full-stack doctor appointment booking platform featuring doctor search, slot booking, secure authentication, online payments, real-time chat, video consultation functionality, appointment management, and responsive dashboards for users and doctors.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
    "Razorpay",
    "Socket IO"
  ],
  github: "https://github.com/viswajith1239/We-Care-frontend.git",
  // live: "YOUR_LIVE_LINK",
  imageType: "doctor"
},
{
  id: "2",
  title: "Fashion Club - E-Commerce Platform",
  description:
    "A full-stack fashion e-commerce platform featuring secure user authentication, Razorpay payment integration, product browsing, shopping cart, wishlist management, order tracking, admin product management, and responsive user interfaces for seamless online shopping.",
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "EJS",
    "JWT",
    "Razorpay",
    "Bootstrap"
  ],
  github: "https://github.com/viswajith1239/Fashion-Club.git",
  // live: "YOUR_LIVE_LINK",
  imageType: "fashion"
},
{
  id: "3",
  title: "Blog Application",
  description:
    "A full-stack blog application featuring secure JWT authentication, blog creation, blog editing, blog deletion, blog viewing functionality, user-based content management, and responsive user interfaces for seamless content publishing and management.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS"
  ],
  github: "https://github.com/viswajith1239/Blog_app.git",
  // live: "YOUR_LIVE_LINK",
  imageType: "blog"
},
{
  id: "4",
  title: "Real-Time Chat Application",
  description:
    "A full-stack real-time chat application featuring secure JWT authentication, one-to-one messaging, real-time communication, online user status, chat history management, responsive user interfaces, and seamless user interaction experience.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "JWT"
  ],
  github: "https://github.com/viswajith1239/Chat-Application.git",
  // live: "YOUR_LIVE_LINK",
  imageType: "chat"
},
{
    id: "5",
    title: "Netflix Clone",
    description: "A high-fidelity Netflix replication featuring user auth, movie trailers, dynamic content categorizations from TMDB API, and responsive UI scaling.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Firebase", "TMDB API"],
    github: "https://github.com/viswajith1239/Netflix-using-react.git",
    // live: "https://demo.com",
    imageType: "netflix"
  },
  
  {
    id: "6",
    title: "OLX Clone",
    description: "Peer-to-peer marketplace application where users can search, list items for sale with image uploads, edit product logs, and contact sellers.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/viswajith1239/Netflix-using-react.git",
    // live: "https://demo.com",
    imageType: "olx"
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: "t1",
    role: "MERN Stack Developer ",
    companyOrInstitution: "Datametron India Private Limited, Bangalore",
    website:"https://datametron.com",
    period: "2025 - Present",
    description: "Developing and maintaining scalable full-stack web applications using the MERN stack, implementing secure authentication systems, optimizing APIs and database queries, and collaborating with cross-functional teams to deliver high-quality software solutions.",
    type: "experience"
  },
  {
    id: "t2",
    role: "NODEJS Developer (Internship)",
    companyOrInstitution: "Fegno Technologies, Ernakulam",
    website:"https://www.fegno.com",
    period: "2025 - 2025",
    description: "Worked on a full-stack HRMS application during the internship, contributed to frontend and backend development, gained hands-on experience with Docker, participated in Agile stand-up meetings, and assisted in API development and database integration.",
    type: "experience"
  },
  {
    id: "t3",
    role: "MERN Stack Developer (Bootcamp)",
    companyOrInstitution: "Brototype, Ernakulam",
    period: "2023 - 2025",
    description: "Intensive project-based training on full-stack development, backend scaling, database modeling, and building complex web apps using React, Node.js, Express, and MongoDB.",
    type: "experience"
  },
  {
    id: "t4",
    role: "Bachelor of Commerce",
    companyOrInstitution: "Nest Institute of Humanities and Basic Sciences",
    period: "2020 - 2023",
    description: "Gained knowledge in commerce, accounting, business management, and financial operations, along with practical experience in Tally, taxation basics, and computerized accounting systems.",
    type: "education"
  }
];

export const services: Service[] = [
  {
    title: "Frontend Development",
    description: "Crafting beautiful, responsive, and animated user interfaces with React, TypeScript, and Tailwind CSS that work flawlessly on all devices.",
    iconName: "FaCode"
  },
  {
    title: "Backend Development",
    description: "Building secure, scalable, and optimized server-side logic using Node.js and Express.js, with robust authentication protocols.",
    iconName: "FaServer"
  },
  {
    title: "Full Stack MERN Applications",
    description: "End-to-end web application engineering incorporating frontend interfaces, APIs, and MongoDB/PostgreSQL database structures.",
    iconName: "FaLayerGroup"
  },
  {
    title: "Responsive Website Design",
    description: "Designing websites that adapt fluidly to desktop, tablet, and mobile displays, prioritizing accessibility and modern styling.",
    iconName: "FaLaptopCode"
  },
  {
    title: "API Integration",
    description: "Developing and integrating RESTful API architectures, third-party payment systems like Razorpay, and media storage pipelines.",
    iconName: "FaExchangeAlt"
  }
];


