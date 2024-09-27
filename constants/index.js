export const navLinks = [
  { id: "about", title: "About", },
  { id: "work", title: "Work", },
  { id: "projects", title: "Projects", },
  { id: "contact", title: "Contact", },
];

export const services = [
  {
    title: "Web Developer",
    description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
  },
  {
    title: "Software Development",
    description: "Expirenced in both functional and OOP: C++, C#, Python, Java, Javascript",
  },
];

export const experiences = [
  {
    title: "Exectuive Learning Assistant",
    company_name: "Ira A. Fulton Schools of Engineering",
    icon: "/company/ira.png",
    iconBg: "#565038",
    date: "August 2024 - Present ",
    points: [
      "Acted as a liaison between tutoring centers, faculty, and Undergraduate Teaching Assistants (UGTAs) for Computer Science courses, fostering communication and refining tutoring strategies.",
      "Lead biweekly collaboration meetings with faculty and UGTAs to plan and execute training sessions, improving tutoring strategies through constant feedback and iteration.",
      "Provided in-person and virtual academic support for over 8 undergraduate courses, enhancing students' understanding of data structures, algorithms, and problem-solving techniques.",
    ],
  },
  {
    title: "Learning Assistant",
    company_name: "Ira A. Fulton Schools of Engineering",
    icon: "/company/ira.png",
    iconBg: "#565038",
    date: "August 2023 - August 2024 ",
    points: [
      "Provided in-person and virtual academic support for 8+ undergraduate courses in an open-lab setting, focusing on Computer Science topics.",
      "Supported student learning in one-on-one sessions, addressing course-specific concerns and coaching students in college success skills.",
      "Demonstrated strong teamwork skills by collaborating effectively with colleagues and faculty to develop innovative tutoring methods and resources for students’ benefit.",
    ],
  },
  {
    title: "Building Manager",
    company_name: "Memorial Union, Arizona State University",
    icon: "/company/asu.png",
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Aug 2024",
    points: [
      "Oversaw daily operations of a 253,000 sq. ft. facility, ensuring smooth operations and excellent service for over 5,000 daily visitors.",
      "Supervised and trained 30+ student employees, fostering a collaborative work environment and maintaining efficient operations.",
      "Coordinated 300+ events annually, optimizing resource allocation and improving event success.",
    ],
  },
];

export const technologies = [
  { name: "C++", icon: "/tech/cpp.png", },
  { name: "C#", icon: "/tech/csharp.png", },
  { name: "Java", icon: "/tech/java.png", },
  { name: "Python", icon: "/tech/python.png", },
  { name: "JavaScript", icon: "/tech/javascript.png", },
  { name: "TypeScript", icon: "/tech/typescript.png", },
  { name: "Go", icon: "/tech/go.png", },
  { name: "R", icon: "/tech/r.png", },
  { name: "MATLAB", icon: "/tech/matlab.png", },
  { name: "HTML 5", icon: "/tech/html.png", },
  { name: "CSS 3", icon: "/tech/css.png", },
  { name: "Tailwind CSS", icon: "/tech/tailwind.svg", },
  { name: "Bootstrap", icon: "/tech/bootstrap.png", },
  { name: "React.js", icon: "/tech/reactjs.png", },
  { name: "Node.js", icon: "/tech/nodejs.png", },
  { name: "Next.js", icon: "/tech/nextjs.svg", },
  { name: "Three.js", icon: "/tech/threejs.png", },
  { name: "Django", icon: "/tech/django.png", },
  { name: "SQL", icon: "/tech/sql.png", },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg", },
  { name: "ASP.NET", icon: "/tech/aspnet.png", },
  { name: "XML", icon: "/tech/xml.png", },
  { name: "Git", icon: "/tech/git.png", },
  { name: "Docker", icon: "/tech/docker.png", },
];

export const projects = [
  // Car Rental System
  {
    name: "Travel Smart App",
    description:
      "An AI-powered travel management app integrating flight and hotel booking, itinerary management, and real-time travel updates.",  
    tags: [ "Next.js", "Django", "PostgreSQL", "PyTorch"],
    read_more: "",
    source_code_link: "",
    website_link: "",
  },
  // Car Rental System
  {
    name: "Car Rental System",
    description:
      "A backend system for car rental services, featuring booking management, user authentication, and comprehensive rental operations.",  
    tags: [ "C++", "SQLite", ],
    read_more: "",
    source_code_link: "https://github.com/sumit4183/car-rental",
    website_link: "",
  },
  // Portfolio
  {
    name: "Portfolio",
    description:
      "Dive into my portfolio to see a variety of web development projects demonstrating my technical skills and creativity.",
    tags: [ "React", "Three.js", "TailwindCSS", ],
    read_more: "",
    source_code_link: "https://github.com/sumit4183/portfolio",
    website_link: "https://sumitp.netlify.app/",
  },
  // Weather/News App
  {
    name: "Weather/News App",
    description:
      "Web application hosted on ASU web server that gives baisc weather informationand news for specific zipcodes/cities",
    tags: [ "C#", "ASP.NET", "RESTfulAPI", ],
    read_more: "",
    source_code_link: "https://github.com/sumit4183/news-weather-app",
    website_link: "",
  },
  // FMS
  {
    name: "FMS",
    description:
      "Games that help stroke survivors redevelop fine motor skills through engaging activities.",
    tags: [ "JavaScript", "HTML", "CSS", ],
    read_more: "",
    source_code_link: "https://github.com/sumit4183/Project-FMS",
    website_link: "https://sumit4183.github.io/Project-FMS/main.html",
  },
  // Store Management System
  {
    name: "Store Management System",
    description:
      "This project delivers an easy-to-use Store Management System with Python and MySQL for efficient, secure, and user-friendly data management.", 
    tags: [ "Python", "SQL", ],
    read_more: "",
    source_code_link: "https://github.com/sumit4183/Store-Management-System",
    website_link: "",
  }
];

export const projectDetails = [
  // Skeleton
  // {
  //   name: "",
  //   read_more: "",
  //   year: "",
  //   tags: [""],
  //   source_code_link: "",
  //   website_link: "",
  //   description: "",
  //   features: ["", ""],
  //   architecture: [{title:"", description:""}],
  //   development: "",
  // },
  // Car Rental System
  {
    name: "Car Rental System",
    read_more: "car-rental-system",
    year: "2024",
    tags: [ "C++", "SQLite", ],
    source_code_link: "https://github.com/sumit4183/car-rental",
    website_link: "",
    description: `The Car Rental Management System is designed to streamline 
      the car rental process, making it more efficient and user-friendly for 
      both customers and administrators. This project addresses the need for
      an organized and automated system to manage car rentals, bookings, and
      user information.`,
    features: [
      "User profiles with personal details and payment methods",
      "Detailed car information (make, model, year, features, rental rates)",
      "Inventory management with capabilities to add, edit, and remove car details",
      "Search and filter functionality based on various criteria",
      "Real-time car availability updates",
      "Comprehensive booking process (car selection, rental dates, booking confirmation)",
      "Functionality to view, modify, or cancel bookings",
      "Management of pickup and drop-off locations",
      "Booking management (view, modify, cancel)",
    ],
    architecture: [
      {
        title: "Modular Design",
        description: "The backend is designed with a modular architecture, separating different concerns into distinct modules (e.g., user management, car listings, booking system).",
      },
      {
        title: "Database Schema",
        description: "The SQLite database is structured with tables for users, cars, bookings, payments, and support tickets, ensuring normalized data with relationships defined through foreign keys.",
      }
    ],
    development: "",
  },
  // Portfolio
  {
    name: "Portfolio",
    read_more: "portfolio",
    year: "2024",
    tags: [ "React", "Three.js", "TailwindCSS", "Framer Motion" ],
    source_code_link: "https://github.com/sumit4183/portfolio",
    website_link: "https://sumitp.netlify.app/",
    description: `Personal portfolio showcases my skills, projects, and 
      experience in a clean, modern, and user-friendly design. It serves as 
      a digital resume and a platform to demonstrate my expertise in web 
      development and other related areas`,
    features: [
      "Fully responsive and looks great on all devices, from mobile phones to desktops.",
      "Each project has its own detailed page, showcasing the technologies used, features implemented, and other details",
      "A brief introduction and summary of my background, skills, and professional experience",
      "An integrated contact form allowing visitors to get in touch with me directly from the website",
      "Smooth transitions and animations powered by Framer Motion to enhance user experience",
    ],
    architecture: [
      {
        title: "Component-Based and Responsive Design",
        description: "Built with React and Tailwind CSS, the portfolio features a modular, component-based structure and fully responsive design, ensuring consistency and accessibility across devices.",
      },
      {
        title: "Continuous Deployment",
        description: "Deployed on Netlify with continuous integration, ensuring updates are automatically reflected.",
      },
    ],
    development: "",
  },
  // Weather/News App
  {
    name: "Weather/News App",
    read_more: "weather-news-app",
    year: "2023",
    tags: [ "C#", "ASP.NET", "RESTfulAPI", "XML" ],
    source_code_link: "https://github.com/sumit4183/news-weather-app",
    website_link: "",
    description: `The Weather/News Application is a comprehensive web-based 
    solution designed to provide users with real-time weather updates and the
    latest news articles, all in one convenient platform. The app integrates
    external APIs to gather data and offers a user-friendly interface for easy
    navigation and access to essential information. This project was developed
    as a collaborative effort with a team, ensuring a well-rounded and robust 
    application.`,
    features: [
      "Displays a 5-day weather forecast for a given location (e.g., zipcode, country code).",
      "Sisplays the latest news articles based on user-defined keywords or topics.",
      "Secure login/signup system with Captcha validation.",
      "Admin functionality to manage staff members.",
      "Visual representation of global temperatures with clickable locations.",

    ],
    architecture: [
      {
        title: "Modular Design",
        description: "The application follows a modular architecture, separating concerns into distinct modules (e.g., user management, weather retrieval, news service).",
      },
      {
        title: "Service-Oriented Architecture (SOA)",
        description: "Utilizes .svc services to handle backend logic, API requests, and data processing, ensuring a clean separation between frontend and backend.",
      },
      {
        title: "Data Storage",
        description: "User and staff data are stored in XML files, with secure data handling and retrieval mechanisms.",
      },
    ],
    development: "",
  },
  // FMS
  {
    name: "FMS",
    // read_more: "fms",
    year: "2021",
    tags: [ "JavaScript", "HTML", "CSS", ],
    source_code_link: "https://github.com/sumit4183/Project-FMS",
    website_link: "https://sumit4183.github.io/Project-FMS/main.html",
    implementation: "Detailed implementation steps for Portfolio...",
    additionalInfo: "Additional information about the Portfolio project...",
  },
  // Store Management System
  {
    name: "Store Management System",
    // read_more: "store-management-system",
    year: "2021",
    tags: [ "Python", "SQL", ],
    source_code_link: "https://github.com/sumit4183/Store-Management-System",
    website_link: "",
    implementation: "Detailed implementation steps for Portfolio...",
    additionalInfo: "Additional information about the Portfolio project...",
  },
]