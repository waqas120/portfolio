"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

// Sample projects - you should replace these with actual projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A responsive dashboard for e-commerce platforms with analytics, inventory management, and order processing features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A social networking application with real-time messaging, post sharing, and user authentication.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "TypeScript", "Material UI", "Node.js"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Application",
    description:
      "A weather forecast application that provides real-time weather data and forecasts for locations worldwide.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "OpenWeather API", "CSS3", "Axios"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills, projects, and professional experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description:
      "An application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Context API", "CSS Modules", "Recipe API"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gradient-to-r from-purple-600 to-blue-500" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className={filter === "featured" ? "bg-gradient-to-r from-purple-600 to-blue-500" : ""}
            >
              Featured
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted">
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between gap-4">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 w-full"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 w-full"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
