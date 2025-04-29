"use client"

import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"
import Image from "next/image"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          {project.title}
        </h1>
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-video group"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={index === 0}
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}