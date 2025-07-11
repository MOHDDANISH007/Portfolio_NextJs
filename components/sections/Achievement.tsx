"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const achievements = [
    {
        title: "🏆 Pixel Hackathon Winner – Outlier (San Francisco)",
        description: `I won the Pixel Hackathon hosted remotely by Outlier (organized from San Francisco, USA)! I built a TripAdvisor Clone with innovative features like photo-based rewards, AI-powered experience sharing, and dark/light mode toggle.`,
        techStack: "Next.js, JavaScript, Tailwind CSS, Google Gemini",
        liveDemo: "https://lnkd.in/g74UYx2x",
        github: "https://lnkd.in/gbSE8qwq",
        verify: "https://lnkd.in/gW75YE_w",
        highlights: [
            "📸 Gallery Section with rewards for photo uploads",
            "🤖 AI-Powered Travel Experience Sharing (Prototype)",
            "🌓 Dark/Light Mode for enhanced UX",
        ],
        thanks:
            "Special thanks to Outlier, Ishan Sharma, Raj Vikramaditya, and Huxn for their support and motivation!",
    },
    {
        title: "🇫🇷 Finalist – RAISE YOUR HACK 2025 (Paris Hackathon)",
        description: `I'm thrilled to be a **finalist** in the global AI hackathon *RAISE YOUR HACK 2025*, selected from over 15,000 participants. Organized by top tech companies including Groq, Meta, Qualcomm, Prosus, and others. As a finalist, I received a fully sponsored event ticket and hotel stay in Paris.`,
        techStack:
            "ReactJS, NextJS, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, Framer Motion, Chart.js, Groq, LLaMA 3, Fi MCP",
        liveDemo: "https://new-frontend-ax82.onrender.com/",
        github: "https://github.com/MOHDDANISH007/parisHackathon",
        verify: "https://lnkd.in/gMvxAKkf",
        highlights: [
            "🧠 AI-Powered Financial Assistant – SmartSpendMoneyWithAI",
            "💸 Real-time financial insights & smart decisions",
            "🎯 Finalist in Top 300 with ticket + hotel booked in Paris",
        ],
        thanks:
            "Grateful to build under the Prosus Track and collaborate globally. A huge thanks to the organizers for recognizing and supporting my project!",
    },
];


const Achievements = () => {
    return (
        <section id="achievements" style={{ backgroundColor: "rgb(1,1,0)" }}  className="bg-zinc-950 text-white py-16 px-4 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold text-yellow-400 mb-4">Achievements</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-300">
                    A showcase of my biggest milestones, global hackathon wins, and proud recognitions in tech!
                </p>
            </motion.div>

            <div className="space-y-12">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                        <ul className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1">
                            {item.highlights.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                        <p className="text-sm italic text-gray-400 mb-4">{item.thanks}</p>

                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            {item.liveDemo && (
                                <a
                                    href={item.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md flex items-center gap-1"
                                >
                                    <ExternalLink size={14} />
                                    Live Demo
                                </a>
                            )}
                            {item.github && (
                                <a
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded-md flex items-center gap-1"
                                >
                                    <ExternalLink size={14} />
                                    GitHub
                                </a>
                            )}
                            {item.verify && (
                                <a
                                    href={item.verify}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 hover:bg-gray-900 text-yellow-300 px-3 py-1 rounded-md flex items-center gap-1"
                                >
                                    <ExternalLink size={14} />
                                    Verification
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
