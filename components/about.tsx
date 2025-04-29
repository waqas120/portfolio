"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Flag } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function About() {
  const personalInfo = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "qaziwaqas120@gmail.com" },
    { icon: <MapPin className="h-5 w-5" />, label: "Address", value: "Lahore, Pakistan" },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+923070660600" },
    { icon: <Flag className="h-5 w-5" />, label: "Nationality", value: "Pakistani" },
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Who am I?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Front-End Developer with over 4 years of experience in building responsive and
                user-friendly web applications. I specialize in React.js, JavaScript, and modern front-end technologies.
              </p>
              <p>
                My journey in web development started with SEO at Thinclicks Pvt Ltd, where I gained valuable insights
                into how websites are ranked and optimized. This knowledge has been instrumental in creating
                SEO-friendly web applications throughout my career.
              </p>
              <p>
                I'm passionate about creating user-friendly interfaces and improving application performance. I enjoy
                solving complex problems and turning design concepts into functional, responsive websites.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.map((info, index) => (
              <motion.div
                key={info.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
              >
                <Card className="h-full border-none bg-gradient-to-br from-background to-muted shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-500">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm text-muted-foreground">{info.label}</h4>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="font-semibold truncate">{info.value}</p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{info.value}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
