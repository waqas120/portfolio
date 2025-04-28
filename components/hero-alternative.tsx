"use client"

import { motion } from "framer-motion"
import AnimatedGradientText from "./animated-gradient-text"

export default function HeroAlternative() {
  // Define the tags and their corresponding gradient colors
  const tags = [
    { text: "React Developer", gradient: "from-blue-500 via-cyan-400 to-sky-500" },
    { text: "Next.js Expert", gradient: "from-indigo-500 via-purple-400 to-pink-500" },
    { text: "Frontend Engineer", gradient: "from-emerald-500 via-green-400 to-teal-500" },
    { text: "UI/UX Enthusiast", gradient: "from-rose-500 via-pink-400 to-purple-500" },
    { text: "JavaScript Wizard", gradient: "from-amber-500 via-yellow-400 to-orange-500" },
    { text: "Redux Specialist", gradient: "from-violet-500 via-purple-400 to-fuchsia-500" },
    { text: "Responsive Design Pro", gradient: "from-cyan-500 via-blue-400 to-indigo-500" },
    { text: "TypeScript Developer", gradient: "from-blue-600 via-indigo-400 to-violet-500" },
    { text: "Performance Optimizer", gradient: "from-green-500 via-emerald-400 to-teal-500" },
    { text: "API Integration Expert", gradient: "from-orange-500 via-red-400 to-rose-500" },
  ]

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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
                  className="text-2xl md:text-3xl font-semibold h-[40px] md:h-[48px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <AnimatedGradientText tags={tags} />
                </motion.div>
              </div>

              {/* Rest of the component remains the same */}
            </div>
          </motion.div>

          {/* Profile image section remains the same */}
        </div>
      </div>
    </section>
  )
}
