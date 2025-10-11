// constants/technologies.ts

export const technologies = [
  // Languages
  { name: "Python", icon: "/tech/python.png", category: "Languages" },  // 1
  { name: "C++", icon: "/tech/cpp.png", category: "Languages" },  // 2
  { name: "C#", icon: "/tech/csharp.png", category: "Languages" },  // 3
  { name: "Java", icon: "/tech/java.png", category: "Languages" },  // 4
  { name: "JavaScript", icon: "/tech/javascript.png", category: "Languages" },  // 5
  { name: "TypeScript", icon: "/tech/typescript.png", category: "Languages" },  // 6
  { name: "Swift", icon: "/tech/swift.png", category: "Languages" }, // 7
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
  { name: "Vue.js", icon: "/tech/vue.png", category: "Frontend" }, // 8
  { name: "SwiftUI", icon: "/tech/swiftui.png", category: "Frontend" }, // 9
  { name: "Extra", icon: "/", category: "Frontend" }, // 10
  { name: "Extra", icon: "/", category: "Frontend" }, // 11

  // Backend Technologies
  { name: "Node.js", icon: "/tech/nodejs.png", category: "Backend" }, // 1
  { name: "Django", icon: "/tech/django.png", category: "Backend" }, // 2
  { name: "ASP.NET", icon: "/tech/aspnet.png", category: "Backend" }, // 3
  { name: "FastAPI", icon: "/tech/fastapi.svg", category: "Backend" }, // 4
  { name: "Extra", icon: "/", category: "Backend" }, // 5
  { name: "Extra", icon: "/", category: "Backend" }, // 6
  { name: "Extra", icon: "/", category: "Backend" }, // 7
  { name: "Extra", icon: "/", category: "Backend" }, // 8
  { name: "Extra", icon: "/", category: "Backend" }, // 9
  { name: "Extra", icon: "/", category: "Backend" }, // 10
  { name: "Extra", icon: "/", category: "Backend" }, // 11

  // Databases
  { name: "PostgreSQL", icon: "/tech/postgresql.svg", category: "Databases & APIs" },  // 1
  { name: "MySQL", icon: "/tech/mysql.png", category: "Databases & APIs" }, // 2
  { name: "SQLite", icon: "/tech/sqlite.jpeg", category: "Databases & APIs" }, // 3
  { name: "Core Data", icon: "/tech/coredata.webp", category: "Databases & APIs" }, // 4
  { name: "REST API", icon: "/tech/restapi.jpg", category: "Databases & APIs" }, // 5
  { name: "SOAP", icon: "/tech/soap.png", category: "Databases & APIs" }, // 6
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 7 
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 8
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 9
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 10
  { name: "Extra", icon: "/", category: "Databases & APIs" }, // 11

  // Tools
  { name: "Git", icon: "/tech/git.png", category: "Tools & DevOps" },  // 1
  { name: "GitHub", icon: "/tech/github.webp", category: "Tools & DevOps" }, // 2
  { name: "GitHub Actions", icon: "/tech/githubactions.svg", category: "Tools & DevOps" }, // 3
  { name: "Docker", icon: "/tech/docker.png", category: "Tools & DevOps" }, // 4
  { name: "Kubernetes", icon: "/tech/kubernetes.png", category: "Tools & DevOps" }, // 5
  { name: "Postman", icon: "/tech/postman.svg", category: "Tools & DevOps" }, // 6
  { name: "XML", icon: "/tech/xml.png", category: "Tools & DevOps" }, // 7
  { name: "JUnit", icon: "/tech/junit.png", category: "Tools & DevOps" }, // 8
  { name: "Extra", icon: "/", category: "Tools & DevOps" }, // 9
  { name: "Extra", icon: "/", category: "Tools & DevOps" }, // 10
  { name: "Extra", icon: "/", category: "Tools & DevOps" }, // 11

  // AI/ML
  { name: "TensorFlow", icon: "/tech/tensorflow.png", category: "AI/ML" },  // 1
  { name: "PyTorch", icon: "/tech/pytorch.png", category: "AI/ML" },  // 2
  { name: "spaCy", icon: "/tech/spacy.png", category: "AI/ML" }, // 3
  { name: "Extra", icon: "/", category: "AI/ML" }, // 4 
  { name: "Extra", icon: "/", category: "AI/ML" }, // 5 
  { name: "Extra", icon: "/", category: "AI/ML" }, // 6 
  { name: "Extra", icon: "/", category: "AI/ML" }, // 7
  { name: "Extra", icon: "/", category: "AI/ML" }, // 8
  { name: "Extra", icon: "/", category: "AI/ML" }, // 9
  { name: "Extra", icon: "/", category: "AI/ML" }, // 10
  { name: "Extra", icon: "/", category: "AI/ML" }, // 11

  // Cloud & Hosting
  { name: "Firebase", icon: "/tech/firebase.png", category: "Cloud & Hosting" }, // 1
  { name: "AWS EC2", icon: "/tech/aws.png", category: "Cloud & Hosting" }, // 2
  { name: "Netlify", icon: "/tech/netlify.svg", category: "Cloud & Hosting" }, // 3
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 4
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 5
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 6
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 7
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 8
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 9
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 10
  { name: "Extra", icon: "/", category: "Cloud & Hosting" }, // 11

];