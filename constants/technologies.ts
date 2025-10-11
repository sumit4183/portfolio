// constants/technologies.ts

export const technologies = [
  // Languages
  { name: "Python", icon: "/tech/python.png", category: "Languages" },  // 1
  { name: "C++", icon: "/tech/cpp.png", category: "Languages" },  // 2
  { name: "C#", icon: "/tech/csharp.png", category: "Languages" },  // 3
  { name: "Java", icon: "/tech/java.png", category: "Languages" },  // 4
  { name: "JavaScript", icon: "/tech/javascript.png", category: "Languages" },  // 5
  { name: "TypeScript", icon: "/tech/typescript.png", category: "Languages" },  // 6
  { name: "Swift", icon: "/", category: "Languages" }, // 7 (Image not available)
  { name: "Go", icon: "/tech/go.png", category: "Languages" },  // 8
  { name: "R", icon: "/tech/r.png", category: "Languages" },  // 9
  { name: "MATLAB", icon: "/tech/matlab.png", category: "Languages" },  // 10
  { name: "SQL", icon: "/tech/sql.png", category: "Languages" },  // 11

  // Frontend Technologies
  { name: "HTML 5", icon: "/tech/html.png", category: "Frontend" }, // 1
  { name: "CSS 3", icon: "/tech/css.png", category: "Frontend" }, // 2
  { name: "Tailwind CSS", icon: "/tech/tailwind.svg", category: "Frontend" }, // 3
  { name: "Bootstrap", icon: "/tech/bootstrap.png", category: "Frontend" }, // 4
  { name: "React.js", icon: "/tech/reactjs.png", category: "Frontend" }, // 5
  { name: "Next.js", icon: "/tech/nextjs.svg", category: "Frontend" }, // 6
  { name: "Three.js", icon: "/tech/threejs.png", category: "Frontend" }, // 7
  { name: "Vue.js", icon: "/", category: "Frontend" }, // 8 (Image not available)
  { name: "SwiftUI", icon: "/", category: "Frontend" }, // 9 (Image not available)
  { name: "Extra", icon: "/", category: "Frontend" }, // 10
  { name: "Extra", icon: "/", category: "Frontend" }, // 11

  // Backend Technologies
  { name: "Node.js", icon: "/tech/nodejs.png", category: "Backend" }, // 1
  { name: "Django", icon: "/tech/django.png", category: "Backend" }, // 2
  { name: "ASP.NET", icon: "/tech/aspnet.png", category: "Backend" }, // 3
  { name: "FastAPI", icon: "/", category: "Backend" }, // 4 (Image not available)
  { name: "Extra", icon: "/", category: "Backend" }, // 5
  { name: "Extra", icon: "/", category: "Backend" }, // 6
  { name: "Extra", icon: "/", category: "Backend" }, // 7
  { name: "Extra", icon: "/", category: "Backend" }, // 8
  { name: "Extra", icon: "/", category: "Backend" }, // 9
  { name: "Extra", icon: "/", category: "Backend" }, // 10
  { name: "Extra", icon: "/", category: "Backend" }, // 11

  // Databases
  { name: "PostgreSQL", icon: "/tech/postgresql.svg", category: "Databases & APIs" },  // 1
  { name: "MySQL", icon: "/", category: "Databases & APIs" }, // 2 (Image not available)
  { name: "SQLite", icon: "/", category: "Databases & APIs" }, // 3 (Image not available)
  { name: "Core Data", icon: "/", category: "Databases & APIs" }, // 4  (Image not available)
  { name: "REST API", icon: "/", category: "Databases & APIs" }, // 5 (Image not available)
  { name: "SOAP", icon: "/", category: "Databases & APIs" }, // 6 (Image not available)
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 7 
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 8
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 9
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 10
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 11

  // Tools
  { name: "Git", icon: "/tech/git.png", category: "Tools & DevOps" },  // 1
  { name: "GitHub", icon: "/", category: "Tools & DevOps" }, // 2 (Image not available)
  { name: "GitHub Actions", icon: "/", category: "Tools & DevOps" }, // 3 (Image not available)
  { name: "Docker", icon: "/tech/docker.png", category: "Tools & DevOps" }, // 4
  { name: "Kubernetes", icon: "/", category: "Tools & DevOps" }, // 5
  { name: "Postman", icon: "/", category: "Tools & DevOps" }, // 6
  { name: "XML", icon: "/tech/xml.png", category: "Tools & DevOps" }, // 7
  { name: "JUnit", icon: "/", category: "Tools & DevOps" }, // 8 (Image not available)
  { name: "Extra", icon: "/", category: "Tools & DevOps" }, // 9
  { name: "Extra", icon: "/", category: "Tools & DevOps" }, // 10
  { name: "Extra", icon: "/", category: "Tools & DevOps" }, // 11

  // AI/ML
  { name: "TensorFlow", icon: "/", category: "AI/ML" },  // 1 (image not available)
  { name: "PyTorch", icon: "/", category: "AI/ML" },  // 2 (image not available)
  { name: "spaCy", icon: "/", category: "AI/ML" }, // 3 (image not available)
  { name: "Extra", icon: "/", category: "AI/ML" }, // 4 
  { name: "Extra", icon: "/", category: "AI/ML" }, // 5 
  { name: "Extra", icon: "/", category: "AI/ML" }, // 6 
  { name: "Extra", icon: "/", category: "AI/ML" }, // 7
  { name: "Extra", icon: "/", category: "AI/ML" }, // 8
  { name: "Extra", icon: "/", category: "AI/ML" }, // 9
  { name: "Extra", icon: "/", category: "AI/ML" }, // 10
  { name: "Extra", icon: "/", category: "AI/ML" }, // 11

  // Cloud & Hosting
  { name: "Firebase", icon: "/", category: "Cloud & Hosting" }, // 1 (Image not available)
  { name: "AWS EC2", icon: "/", category: "Cloud & Hosting" }, // 2 (Image not available)
  { name: "Netlify", icon: "/", category: "Cloud & Hosting" }, // 3 (Image not available)
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 4 
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 5 
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 6 
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 7
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 8
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 9
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 10
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 11

];