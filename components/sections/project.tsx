"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ExternalLink, Github } from "lucide-react";

import Image1 from "../../constants/homeChef_app.png";
import Image2 from "../../constants/country_app.png";
import Image3 from "../../constants/EmployeAdminMangement.png";

// 👇 Interface definition
interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleOverlay = (index: number) => {
    const isMobile = window.innerWidth < 768; // tailwind's 'md'
    if (isMobile) {
      setActiveProject((prev) => (prev === index ? null : index));
    }
  };

  const ProjectData: Project[] = [
    {
      title: "The Home Chef",
      description:
        "A recipe search website that lets users explore dishes based on ingredients. Includes custom error handling, responsive design, and filtering features.",
      image: Image1,
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      liveUrl: "https://thehomechef.netlify.app/",
      githubUrl: "https://github.com/aliMobasshir/HomeChef",
      features: [
        "Search recipes by keyword",
        "Responsive layout",
        "Error handling and fallback UI",
        "Custom filtering and 'No Result' messages",
      ],
    },
    {
  title: "GameKart",
  description:
    "An end-to-end gaming e-commerce platform featuring AI-powered game recommendations, secure JWT authentication, dynamic listings, and seamless CI/CD deployment.",
  image: Image2, // Replace with the actual image variable
  technologies: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT"
  ],
  liveUrl: "https://lnkd.in/gwiwskbX",
  githubUrl: "https://lnkd.in/gqXJZ-sC",
  features: [
    "Secure JWT Authentication",
    "AI-powered game recommendations",
    "RESTful API with custom middleware",
    "Advanced search & filters",
    "Dynamic cart functionality",
    "Protected routes for users",
    "Responsive mobile-first UI",
    "Framer Motion animations",
    "CI/CD pipeline with automated deployment"
  ],
},
    {
  title: "TripAdvisor Clone",
  description:
    "A travel platform clone built for the Pixel Hackathon by Outlier, featuring photo-based reward systems, AI-powered experience sharing, and modern UI themes using cutting-edge technologies.",
  image: Image3, // Replace with actual image variable
  technologies: [
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Google Gemini AI"
  ],
  liveUrl: "https://lnkd.in/g74UYx2x",
  githubUrl: "https://lnkd.in/gbSE8qwq",
  features: [
    "Photo Gallery with upload rewards",
    "AI-generated travel advice (Prototype)",
    "Dark/Light Mode toggle",
    "Responsive design",
    "Modern UX/UI with Tailwind CSS",
    "Prototype integration with AI (Google Gemini)",
    "Planned real-time experience sharing via WebSockets"
  ],
},
    {
      title: "Employee Management System",
      description:
        "A web-based Employee Management System built using ReactJS with Context API for global state management...",
      image: Image3,
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Context API"],
      liveUrl: "https://employeemangementsystem00.netlify.app/",
      githubUrl: "https://github.com/MOHDDANISH007/Employee_Management-_System",
      features: [
        "Employee Dashboard",
        "Task Management",
        "Simple CLI interface",
        "Local Storage",
      ],
    },
    {
      title: "Code Reviewer Tool",
      description:
        "A full-stack web app where users can review code snippets. Built using Node.js, Express.js, and React.js with a modern UI.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://github.com/MOHDDANISH007/AI_BASED_CODE_REVIEWER_PROJECT.git",
      githubUrl: "https://github.com/MOHDDANISH007/AI_BASED_CODE_REVIEWER_PROJECT.git",
      features: [
        "Post and review code snippets",
        "MongoDB-based data storage",
        "Styled using Tailwind",
        "Full-stack integration",
      ],
    },
    {
      title: "Country API Project",
      description:
        "A country information app built with React, allowing users to search and view details about countries.",
      image: Image2,
      technologies: ["React.js", "JavaScript", "CSS", "REST API"],
      liveUrl: "https://sensational-crisp-82517e.netlify.app/",
      githubUrl: "https://github.com/MOHDDANISH007/ReactProject",
      features: [
        "Search for any country",
        "Displays population, region, flag, and more",
        "Clean and responsive UI",
        "Uses external country data API",
      ],
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Projects & Experience</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Explore my latest projects showcasing my experience in full stack development...
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className="relative overflow-hidden aspect-video cursor-pointer"
              onClick={() => toggleOverlay(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
              <div
                className={`absolute inset-0 bg-black/60 ${
                  activeProject === index ? "opacity-100" : "opacity-0"
                } hover:opacity-100 transition-opacity duration-300 flex gap-3 items-center justify-center`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-md text-sm flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-md text-sm flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>

            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-800 text-yellow-300 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
