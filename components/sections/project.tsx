"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

import Image1 from "../../constants/homeChef_app.png"
import Image2 from "../../constants/country_app.png"
import Image3 from "../../constants/EmployeAdminMangement.png"

const Projects = () => {
    const ProjectData = [
        {
            title: "The Home Chef",
            description: "A recipe search website that lets users explore dishes based on ingredients. Includes custom error handling, responsive design, and filtering features.",
            image: Image1,
            technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
            liveUrl: "https://thehomechef.netlify.app/",
            githubUrl: "https://github.com/aliMobasshir/HomeChef",
            features: [
                "Search recipes by keyword",
                "Responsive layout",
                "Error handling and fallback UI",
                "Custom filtering and 'No Result' messages"
            ]
        },
        {
            title: "Employee Management System",
            description: "A web-based Employee Management System built using ReactJS with Context API for global state management. It includes core functionalities such as Add, Delete, Update, and Search employee data. The UI is styled using HTML and CSS, ensuring a responsive and user-friendly experience.",
            image: Image3,
            technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Context API"],
            liveUrl: "https://employeemangementsystem00.netlify.app/",
            githubUrl: "https://github.com/MOHDDANISH007/Employee_Management-_System",
            features: [
                "Employee Dashboard: Manage employee info, tasks, and performance.",
                "Task Management: Assign, track, and update tasks with deadlines and priorities.",
                "Simple CLI interface",
                "Local Storage: Fast, offline access with browser-based data storage."
            ]
        },
        {
            title: "Code Reviewer Tool",
            description: "A full-stack web app where users can review code snippets. Built using Node.js, Express.js, and React.js with a modern UI.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
            technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS"],
            liveUrl: "https://github.com/MOHDDANISH007/AI_BASED_CODE_REVIEWER_PROJECT.git", // add live URL if deployed
            githubUrl: "https://github.com/MOHDDANISH007/AI_BASED_CODE_REVIEWER_PROJECT.git",
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
            liveUrl: "https://sensational-crisp-82517e.netlify.app/",
            githubUrl: "https://github.com/MOHDDANISH007/ReactProject",
            features: [
                "Search for any country",
                "Displays population, region, flag, and more",
                "Clean and responsive UI",
                "Uses external country data API"
            ]
        }
    ];

    return (
        <section id='projects' className='container mx-auto px-4 py-20'>
            <div className='text-center mb-12'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <h2 className='text-3xl font-bold mb-8 text-center'>
                        <span className='text-primary'>Projects</span> & Experience
                    </h2>
                    <p className='text-muted-foreground max-w-2xl mx-auto'>
                        Explore my latest projects showcasing my experience in full stack development...
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                    {ProjectData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-card">

                            <div className="group overflow-hidden border-border/5 bg-card hover:shadow-xl transition-all duration-300">
                                <div className='relative overflow-hidden aspect-video'>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400} // fix width
                                        height={200} // fix height
                                        className='object-cover group-hover:scale-110 transition-all duration-300'
                                    />
                                    <div className='absolute gap-2 inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                        <button className="bg-secondary text-white p-2 rounded-sm">
                                            <a href={project.liveUrl} target='_blank' className="inline-flex items-center gap-1">
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        </button>

                                        <button className="bg-secondary text-white p-2 rounded-sm">
                                            <a href={project.githubUrl} target='_blank' className="inline-flex items-center gap-1">
                                                <Github className="w-4 h-4" />
                                                Github
                                            </a>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2 hover:text-primary">{project.title}</h3>
                                    <p className="text-muted-foreground hover:text-primary">{project.description}</p>
                                </div>

                                <div className='p-6 space-y-8'>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            project.technologies.map((tech, index) => (
                                                <span key={index} className="text-sm bg-gray-200 p-2 rounded">{tech}</span>
                                            ))
                                        }
                                    </div>

                                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                        {
                                            project.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
