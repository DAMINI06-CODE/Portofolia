
export const personalInfo = {
  name: 'Damini S',
  title: 'MERN Stack Developer',
  email: 'daminis061123@gmail.com',
  phone: '+91 99455 55715',
  photoUrl: '/damu.jpg',
  resumeUrl: '/Damini-S-Resume.pdf',
  socials: {
    github: 'https://github.com/DAMINI06-CODE',
    linkedin: 'https://www.linkedin.com/in/damini-s-121663258/',
    twitter: 'https://twitter.com',
  },
  bio: [
    'I’m Damini S, a dedicated MERN Stack Developer with experience in building dynamic and scalable web applications using MongoDB, Express, React, and Node.js. I recently graduated with a B.E. in Computer Science from HKBK College of Engineering (CGPA: 9.02).',
    'Through my projects, I’ve gained practical experience developing AI-powered safety platforms, task management systems, e-commerce applications, and an institutional marketplace for commercial real estate, while working with modern tools like Next.js, Tailwind CSS, Docker, GitHub Actions, Firebase, and AWS.',
    'I have also contributed to research, with one paper published in IEEE on smart summary recommendation models, and another presented at an international conference on AI-driven data security and privacy in banking.',
    'I thrive on solving problems, building impactful solutions, and continuously learning new technologies to grow as a developer.'
  ]
};

export const projects = [
  {
    title: 'Crimson Alert — AI-Powered Personal Safety & Crime Management',
    description: 'Built with Next.js, TypeScript, Firebase, and Google Genkit. Developed real-time incident reporting and AI-powered analysis (categorization, severity detection, recommendations). Implemented live alerts, case file storage in Firestore, and AI-driven location risk assessment.',
    imageUrl: '/crime.png',
    videoUrl: 'https://real-estate-listing-5ccd.vercel.app/-crimson',
    aiHint: 'crime management app',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Genkit'],
    githubUrl: 'https://github.com/DAMINI06-CODE/Crimson-alert',
  },
  {
    title: 'Task Manager',
    description: 'Created using React, Node.js, PostgreSQL, and Prisma. Implemented task CRUD with filters (To-Do/Board/Calendar), hide completed tasks, and sorting. Containerized with Docker, integrated CI/CD via GitHub Actions, and migrated from MongoDB to relational schema.',
    imageUrl: '/Task.png',
    videoUrl: 'https://drive.google.com/file/d/1pS6LX-UuXIjZE2FKY-FMyM5JP11BpjTt/view?usp=drive_link',
    aiHint: 'task manager app',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    githubUrl: 'https://github.com/DAMINI06-CODE/Task_Manger',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Developed using React (Vite), Node.js, Express, MongoDB, JWT, and Tailwind CSS. Features include secure authentication, GPS-based address detection, multi-address management, and AI-enhanced product descriptions with real-time cart and wishlist sync.',
    imageUrl: '/ecom.png',
    videoUrl: 'https://drive.google.com/file/d/1IhXj79a4enCOrmFJZqC2NjjzPN5x-H9o/view?usp=drive_link',
    aiHint: 'ecommerce platform',
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/DAMINI06-CODE/Ecommerce',
  },
   {
    title: 'Real Estate Listing Platform',
    description: '(Next.js, TypeScript, Tailwind CSS, Vercel) Inspired by Pillar Markets. Built a landing page with modular UI components and deployment-ready architecture. Designed for scalability and seamless deployment on Vercel.',
    imageUrl: '/real.png',
    videoUrl: 'https://drive.google.com/file/d/1Jf8wAtDEblufasqj-BddAUTo9Ib9D3ch/view?usp=drive_link',
    aiHint: 'real estate marketing',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/DAMINI06-CODE/real-estate-listing',
  },
];

export const skills = [
    {
        title: 'Programming Languages',
        skills: [ { name: 'Python' }, { name: 'Java' }, { name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'C' }, { name: 'HTML' }, { name: 'CSS' } ],
    },
    {
        title: 'Frameworks',
        skills: [ { name: 'React' }, { name: 'Next.js' }, { name: 'Express' }, { name: 'Vite' }, { name: 'Tailwind CSS' } ],
    },
    {
        title: 'Databases/ORM',
        skills: [ { name: 'PostgreSQL' }, { name: 'Prisma' }, { name: 'MongoDB' } ],
    },
    {
        title: 'Tools',
        skills: [ { name: 'Docker' }, { name: 'GitHub Actions' }, { name: 'Git' }, { name: 'Axios' } ],
    },
    {
        title: 'Platforms',
        skills: [ { name: 'Firebase' }, { name: 'AWS' }, { name: 'GitHub Pages' }, { name: 'VS Code' }, { name: 'MongoDB Atlas' } ],
    },
    {
        title: 'Soft Skills',
        skills: [ { name: 'Problem Solving' }, { name: 'Teamwork' }, { name: 'Communication' }, { name: 'Planning' } ],
    }
];


export const education = [
    {
      institution: 'HKBK College of Engineering, Bangalore',
      degree: 'BE',
      period: '2021–2025',
      result: 'CGPA: 9.02'
    },
    {
      institution: 'Soundarya PU College, Bangalore',
      degree: 'PUC',
      period: '2019–2021',
      result: '88%'
    },
    {
      institution: 'Triveni High School, Bangalore',
      degree: 'SSLC',
      period: '2018–2019',
      result: '89%'
    }
];

export const internships = [
    {
        company: 'Cranes Varsity',
        role: 'Data Science with AIML',
        period: 'Oct–Nov 2023',
        description: 'Gained hands-on experience with model training, analysis, cleaning, and processing. Implemented end-to-end workflows in data science and AI/ML pipelines.'
    },
    {
        company: 'Gleamator Technologies LLP',
        role: 'AWS Academic Cloud Foundation',
        period: 'Mar–Apr 2025',
        description: 'Covered theoretical concepts of AWS cloud foundations including core services and best practices. Completed guided labs and exercises on AWS services.'
    }
];

export const certifications = [
    { name: 'C Programming', date: 'May 2022' },
    { name: 'Java Beginner Guide', date: 'Feb 2023' },
    { name: 'MongoDB 101', date: 'Oct 2024' },
    { name: 'Blockchain Developer', date: 'Oct 2024' },
    { name: 'Cloud Computing', date: 'Nov 2024' },
    { name: 'Fullstack Development', date: 'Feb 2025' }
];

export const publications = [
    {
        title: 'A Comprehensive Review of Existing Smart Summary Recommendation Model Enhanced Through RL and XAI Techniques',
        venue: 'Published in IEEE, presented at 2024 International Conference on Sustainable Communication Networks and Applications (ICSCNA).'
    },
    {
        title: 'AI Revolutionizing Data Security and Privacy in Banking: A Deep Dive Analysis',
        venue: 'Presented at 15th Int’l Conf. on Recent Engineering & Technology (ICRET), May 2024.'
    }
];
