import {
    cpp,
    csharp,
    java,
    python,
    javascript,
    go,
    sql,
    r,
    matlab,
    typescript,
    html,
    css,
    bootstrap,
    reactjs,
    django,
    aspnet,
    xml,
    git,
    docker,
    ira,
    asu,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    // {
    //   title: "Web Developer",
    //   icon: web,
    // },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Go",
      icon: go,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "MATLAB",
      icon: matlab,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "ASP.NET",
      icon: aspnet,
    },
    {
      name: "XML",
      icon: xml,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Tutor",
      company_name: "Ira A. Fulton Schools of Engineering",
      icon: ira,
      iconBg: "#565038",
      date: "August 2023 - Present ",
      points: [
        "Offer comprehensive one-on-one and group tutoring sessions to 20+ undergraduate students in Computer Sciences courses, assisting them in understanding complex concepts and problem-solving techniques.",
        "Facilitate study groups for targeted high-stakes courses, creating a collaborative learning environment to enhance students’ understanding and academic performance.",
        "Demonstrate strong teamwork skills by collaborating effectively with colleagues and faculty to develop innovative tutoring methods and resources for students’ benefit.",
      ],
    },
    {
      title: "Building Manager",
      company_name: "Memorial Union, Arizona State University",
      icon: asu,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Oversees daily activities and serves as the point of contact for students, management, and community members.",
        "Assist in monitoring and maintenance of a 254,000 square feet facility that serves over 5,000 students in a day.",
        "Supervise 30+ student employees and managed 300+ events over a span of one year.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      // image: ,
      source_code_link: "https://github.com/",
    },
    {
      name: "Weather/News App",
      description:
        "Web application hosted on ASU web server that gives baisc weather information such as 5-day weather forecast for specific zipcodes/cities. Additionally, user can also view news on zipcode/city.",
      tags: [
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      // image: ,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      // image: ,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };