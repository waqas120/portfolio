"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Layers, Database, GitBranch, Globe, Languages, Brain } from "lucide-react"

const technicalSkills = [
  { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js"] },
  { category: "UI Libraries", skills: ["Tailwind CSS", "Material-UI", "Headless UI"] },
  { category: "State Management", skills: ["Redux", "Context API"] },
  { category: "Version Control", skills: ["Git", "GitHub", "GitLab"] },
  { category: "API", skills: ["RESTful APIs", "GraphQL", "Axios"] },
  { category: "Package Managers", skills: ["npm", "Yarn"] },
]

const languages = [
  { language: "Urdu", level: "Native", proficiency: 100 },
  { language: "English", level: "Advanced", proficiency: 85 },
  { language: "Punjabi", level: "Advanced", proficiency: 90 },
  { language: "Hindi", level: "Advanced", proficiency: 80 },
]

const softSkills = ["Problem-solving", "Attention to detail", "Communication", "Teamwork"]

const skillIcons = {
  Frontend: <Code className="h-5 w-5" />,
  "UI Libraries": <Layers className="h-5 w-5" />,
  "State Management": <Database className="h-5 w-5" />,
  "Version Control": <GitBranch className="h-5 w-5" />,
  API: <Globe className="h-5 w-5" />,
  "Package Managers": <Code className="h-5 w-5" />,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="technical" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technical" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-500">
                          {skillIcons[skillGroup.category as keyof typeof skillIcons]}
                        </div>
                        <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="languages">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-500">
                            <Languages className="h-5 w-5" />
                          </div>
                          <h3 className="font-semibold">{lang.language}</h3>
                        </div>
                        <span className="text-sm text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-500">
                      <Brain className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Soft Skills</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5"
                      >
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></div>
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
