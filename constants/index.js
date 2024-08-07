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
    title: "Computer Science Tutor",
    company_name: "Ira A. Fulton Schools of Engineering",
    icon: "/company/ira.png",
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
    icon: "/company/asu.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Oversees daily activities and serves as the point of contact for students, management, and community members.",
      "Assist in monitoring and maintenance of a 254,000 square feet facility that serves over 5,000 students in a day.",
      "Supervise 30+ student employees and managed 300+ events over a span of one year.",
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
  { name: "SQL", icon: "/tech/sql.png", },
  { name: "R", icon: "/tech/r.png", },
  { name: "MATLAB", icon: "/tech/matlab.png", },
  { name: "HTML 5", icon: "/tech/html.png", },
  { name: "CSS 3", icon: "/tech/css.png", },
  { name: "Tailwind CSS", icon: "/tech/tailwind.svg", },
  { name: "Bootstrap", icon: "/tech/bootstrap.png", },
  { name: "React", icon: "/tech/reactjs.png", },
  { name: "Next.js", icon: "/tech/nextjs.svg", },
  { name: "Three.js", icon: "/tech/threejs.png", },
  { name: "Django", icon: "/tech/django.png", },
  { name: "ASP.NET", icon: "/tech/aspnet.png", },
  { name: "XML", icon: "/tech/xml.png", },
  { name: "Git", icon: "/tech/git.png", },
  { name: "Docker", icon: "/tech/docker.png", },
];

export const projects = [
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
    implementation: "Detailed implementation steps for Portfolio...",
    additionalInfo: "Additional information about the Portfolio project...",
  },
  // Portfolio
  {
    name: "Portfolio",
    // read_more: "portfolio",
    year: "2024",
    tags: [ "React", "Three.js", "TailwindCSS", ],
    source_code_link: "https://github.com/sumit4183/portfolio",
    website_link: "https://sumitp.netlify.app/",
    implementation: "Detailed implementation steps for Portfolio...",
    additionalInfo: "Additional information about the Portfolio project...",
  },
  // Weather/News App
  {
    name: "Weather/News App",
    // read_more: "weather-news-app",
    year: "2023",
    tags: [ "C#", "ASP.NET", "RESTfulAPI", ],
    source_code_link: "https://github.com/sumit4183/news-weather-app",
    website_link: "",
    implementation: "Detailed implementation steps for Portfolio...",
    additionalInfo: "Additional information about the Portfolio project...",
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