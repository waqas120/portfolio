"use client"

import { useState } from "react"
import { TypeAnimation } from "react-type-animation"

interface AnimatedGradientTextProps {
  tags: {
    text: string
    gradient: string
  }[]
}

export default function AnimatedGradientText({ tags }: AnimatedGradientTextProps) {
  const [currentTagIndex, setCurrentTagIndex] = useState(0)

  // Create the sequence array for TypeAnimation
  const sequence = tags.reduce(
    (acc, tag, index) => {
      acc.push(tag.text, 1000)
      return acc
    },
    [] as (string | number)[],
  )

  return (
    <div className="relative">
      <div
        className={`transition-all duration-1000 ease-in-out bg-gradient-to-r ${tags[currentTagIndex].gradient} text-transparent bg-clip-text`}
      >
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          speed={50}
          repeat={Number.POSITIVE_INFINITY}
          className="text-transparent"
          cursor={true}
          preRenderFirstString={false}
          onBeforeType={() => {
            setCurrentTagIndex((prevIndex) => (prevIndex + 1) % tags.length)
          }}
        />
      </div>
    </div>
  )
}
