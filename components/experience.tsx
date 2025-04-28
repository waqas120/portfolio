"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "React Developer",
    company: "Meteoroite Pvt Ltd",
    location: "Lahore",
    period: "Oct 2022 - Present",
    responsibilities: [
      "Worked as a Frontend Developer for 2 years using React, Redux, and JavaScript to build responsive web applications.",
      "Integrated RESTful APIs to fetch and display data on the front end.",
      "Developing new features or changing existing features.",
      "Compact, readable, and well-structured code writing.",
      "Implemented state management using Redux for large-scale projects.",
      "Skilled in debugging and troubleshooting front-end issues and Resolving production bugs.",
      "Implemented design mockups in Adobe XD or Figma into functional web pages.",
      "Collaborated with designers and backend developers to deliver high-quality user interfaces.",
    ],
  },
  {
    title: "Front End Developer",
    company: "AllaySol",
    location: "Lahore",
    period: "Sep 2021 - Sep 2022",
    responsibilities: [
      "Worked as a React developer, focusing on building components and interfaces while learning the basics of JavaScript and React.",
      "Implemented interactive features using HTML5, CSS3, and Bootstrap.",
      "Assisted in debugging and troubleshooting issues in existing applications.",
      "Gained hands-on experience with the React ecosystem, including state management and component lifecycle.",
      "Started using UI libraries like Material UI, and Ant-Design etc to create consistent, modern, and accessible interfaces.",
    ],
  },
  {
    title: "Front End Developer",
    company: "BrownFox Technology Pvt Ltd",
    location: "Rahim Yar Khan",
    period: "Mar 2021 - Aug 2021",
    responsibilities: [
      "Completed a 6-month internship focused on learning and applying HTML, CSS, Bootstrap, and Tailwind CSS.",
      "Developed responsive web pages and components under the guidance of senior developers.",
      "Assisted in implementing design mockups into fully functional web pages.",
      "Gained a strong foundation in front-end development, including basic styling and layout techniques.",
    ],
  },
  {
    title: "SEO (Search Engine Optimization)",
    company: "Thinclicks Pvt Ltd",
    location: "Lahore",
    period: "May 2019 - Feb 2021",
    responsibilities: [
      "Managed SEO strategies for various clients to improve organic search rankings and drive website traffic.",
      "Monitored and analyzed website performance using tools like Google Analytics to track SEO progress.",
      "Conducted keyword research and analysis to optimize website content and metadata for improved search visibility.",
      "Implemented on-page and off-page SEO techniques to increase website authority and improve search engine rankings.",
      "Collaborated with content creators and web developers to implement SEO best practices and improve overall website performance.",
      "Developed and implemented link building strategies to increase domain authority and improve search engine visibility.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Timeline with alternating left-right layout */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 opacity-30"></div>

          {/* Left line for mobile */}
          <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 opacity-30"></div>

          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 !== 0 ? "md:justify-end" : "md:justify-start"
                  } relative md:ml-auto`}
                >
                  {/* Timeline dot - always centered on desktop, left-aligned on mobile */}
                  <div
                    className={`absolute z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-md 
                      ${index % 2 === 0 ? "md:left-[calc(50%-24px)]" : "md:left-[calc(50%-24px)]"} 
                      left-0 top-0`}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>

                  {/* Card - alternating left/right on desktop, always right-aligned on mobile */}
                  <Card
                    className={`w-full md:w-[calc(50%-48px)] border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted 
                      ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"} ml-12`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-center mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <div className="flex items-center text-muted-foreground">
                            <span>{exp.company}</span>
                            <span className="mx-2">•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 mt-2 sm:mt-0">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.period}</span>
                        </Badge>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
