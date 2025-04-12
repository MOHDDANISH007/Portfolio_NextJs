// data.ts
import Image1 from "./homeChef_app.png"
import Image2 from "./country_app.png"
import Image3 from "./EmployeAdminMangement.png"


export const technologies = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    {
        name: "Express.js",
        logo: "https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png"
    },
    {
        name: "Next.js",
        logo: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DofdLH9enWUHwvs3Qmpg2w.jpeg"
    },
    {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    },


    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
]



export const projects = [
    {
        title: "The Home Chef",
        description: "A recipe search website that lets users explore dishes based on ingredients. Includes custom error handling, responsive design, and filtering features.",
        image: Image1,
        technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        liveUrl: "https://thehomechef.netlify.app/",
        githubUrl: "https://github.com/MOHDDANISH007/CountryAPI-React",
        features: [
            "Search recipes by keyword",
            "Responsive layout",
            "Error handling and fallback UI",
            "Custom filtering and 'No Result' messages"
        ]
    },
    {
        title: "Employee Management System",
        description: "A C++ console-based application to manage employee data with features like add, delete, update, and search functionality.",
        image: Image3,
        technologies: ["C++"],
        liveUrl: "#",
        githubUrl: "https://github.com/MOHDDANISH007/Employee-Management-System",
        features: [
            "Add and remove employees",
            "Update and search records",
            "Simple CLI interface",
            "Efficient data storage"
        ]
    },
    {
        title: "Code Reviewer Tool",
        description: "A full-stack web app where users can review code snippets. Built using Node.js, Express.js, and React.js with a modern UI.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "#", // add live URL if deployed
        githubUrl: "https://github.com/MOHDDANISH007/code-reviewer",
        features: [
            "Post and review code snippets",
            "MongoDB-based data storage",
            "Styled using Tailwind",
            "Full-stack integration"
        ]
    },
    {
        title: "Country API Project",
        description: "A country information app built with React, allowing users to search and view details about countries.",
        image: Image2,
        technologies: ["React.js", "JavaScript", "CSS", "REST API"],
        liveUrl: "https://country-api-project.netlify.app/",
        githubUrl: "https://github.com/MOHDDANISH007/CountryAPI-React",
        features: [
            "Search for any country",
            "Displays population, region, flag, and more",
            "Clean and responsive UI",
            "Uses external country data API"
        ]
    }
];
