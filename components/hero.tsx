"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  // Track the current tag index to apply the appropriate color
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  // Define the tags and their corresponding gradient colors
  const tags = [
    {
      text: "React Developer",
      gradient: "from-blue-500 via-cyan-400 to-sky-500",
    },
    {
      text: "Next.js Expert",
      gradient: "from-indigo-500 via-purple-400 to-pink-500",
    },
    {
      text: "Frontend Engineer",
      gradient: "from-emerald-500 via-green-400 to-teal-500",
    },
    {
      text: "UI/UX Enthusiast",
      gradient: "from-rose-500 via-pink-400 to-purple-500",
    },
    {
      text: "JavaScript Wizard",
      gradient: "from-amber-500 via-yellow-400 to-orange-500",
    },
    {
      text: "Redux Specialist",
      gradient: "from-violet-500 via-purple-400 to-fuchsia-500",
    },
    {
      text: "Responsive Design Pro",
      gradient: "from-cyan-500 via-blue-400 to-indigo-500",
    },
    {
      text: "TypeScript Developer",
      gradient: "from-blue-600 via-indigo-400 to-violet-500",
    },
    {
      text: "Performance Optimizer",
      gradient: "from-green-500 via-emerald-400 to-teal-500",
    },
    {
      text: "API Integration Expert",
      gradient: "from-orange-500 via-red-400 to-rose-500",
    },
  ];

  // Create the sequence array for TypeAnimation
  const sequence = tags.reduce((acc, tag, index) => {
    acc.push(tag.text, 1000);
    return acc;
  }, [] as (string | number)[]);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <motion.h2
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Hello, I'm
                </motion.h2>
                <motion.h1
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 text-transparent bg-clip-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Muhammad Waqas
                </motion.h1>
                <motion.div
                  className="text-2xl md:text-3xl font-semibold h-[40px] md:h-[48px] relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div
                    className={`absolute transition-all duration-1000 ease-in-out bg-gradient-to-r ${tags[currentTagIndex].gradient} text-transparent bg-clip-text`}
                  >
                    <TypeAnimation
                      sequence={sequence}
                      wrapper="span"
                      speed={50}
                      repeat={Number.POSITIVE_INFINITY}
                      className="text-transparent"
                      cursor={true}
                      preRenderFirstString={false}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.p
                className="text-muted-foreground me-3 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                I build fast, user-friendly websites and apps with React.js and
                Next.js. I specialize in creating responsive designs that work
                smoothly on all devices, writing clean code for easy
                maintenance. My focus is on improving performance, SEO, and
                accessibility to ensure great experiences for both users and
                businesses. I work with tools like Tailwind CSS, Redux, and
                modern APIs to turn ideas into real-world solutions. Whether
                it’s a single-page app or a complex project, I prioritize
                simplicity and efficiency. Let’s collaborate to bring your
                digital vision to life! <br />
                <strong>Quick, clear, and friendly! Let me know if you want to tweak anything. 😊</strong>
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  <a href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-[500px] rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl absolute -z-10"></div>
            <div className="w-full h-[500px] flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Muhammad Waqas"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
