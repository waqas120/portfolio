"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-muted/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
          >
            Muhammad Waqas
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4"
          >
            <a
              href="https://github.com/waqas120"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-foreground hover:text-purple-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadwaqas00/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-foreground hover:text-purple-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:qaziwaqas120@gmail.com"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-foreground hover:text-purple-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            &copy; {currentYear} Muhammad Waqas. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
