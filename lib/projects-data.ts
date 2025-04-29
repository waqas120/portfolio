import BatchDialer from "@/app/assets/BatchDialer.png"
import Jepigaz from "@/app/assets/Jepigaz.png"
import Mshrai from "@/app/assets/Mshrai.png"

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Main image (kept for backwards compatibility)
  images: string[]; // Array of image URLs
  technologies: string[];
  demoLink: string;
  featured: boolean;
}

export const projects: Project[] = [
    {
      id: 1,
      title: "BatchDialer",
      description:
        "BatchDialer is a platform for managing inbound and outbound calls particularly for sales teams. This project is designed to provide a seamless experience for user experience for managing subscriptions and payments, likely targeting sales teams to improve their productivity and lead generation. It emphasizes performance optimization, secure payment handling, and role-based access control.",
      image: `${BatchDialer.src}`,
      images: [],
      technologies: ["React", "Redux", "React Router", "Bootstrap", "Immutable.js", "Webpack", "Stripe"],
      demoLink: "https://app.batchdialer.com/",
      featured: true,
    },
    {
      id: 2,
      title: "Japigaz",
      description: "Japigaz app is a modern React application with a focus on modularity, performance (via lazy loading), and user experience (via routing, protected routes, and notifications). It seems to be a platform for managing cars, with features like selling cars, viewing car details, managing favorites, and advanced filtering.",
      image: `${Jepigaz.src}`,
      images: [
        `${Jepigaz.src}`,
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ],
      technologies: ["React.Js", "Redux", "Tailwind CSS", "Ant Design", "React Hook Form", "Axios", "React Router", "Styled Components"],
      demoLink: "",
      featured: true,
    },
    {
      id: 3,
      title: "Mshrai",
      description:
        "Mshrai is a comprehensive platform designed to facilitate the buying and selling of cars, with features for user interaction, search, authentication, and a visually appealing interface. The platform is localized with i18n, styled for responsiveness, and uses centralized state management.",
      image: `${Mshrai.src}`,
      images: [
        `${Mshrai.src}`,
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ],
      technologies: ["React.js", "Redux Toolkit", "React Router", "Bootstrap", "Axios", "Formik", 'i18next', "moment.js"],
      demoLink: "https://mshrai.com/",
      featured: true,
    },
    {
      id: 4,
      title: "Kaha Create",
      description:
        "A weather forecast application that provides real-time weather data and forecasts for locations worldwide.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ],
      technologies: ["React", "OpenWeather API", "CSS3", "Axios"],
      demoLink: "",
      featured: false,
    },
    {
      id: 5,
      title: "IzzySpell",
      description:
        "An application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ],
      technologies: ["React", "Context API", "CSS Modules", "Recipe API"],
      demoLink: "",
      featured: false,
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing skills, projects, and professional experience.",
        image: "/placeholder.svg?height=400&width=600",
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600"
        ],
        technologies: ["Next.js", "Framer Motion", "Radix UI", "Tailwind CSS"],
        demoLink: "https://muhammad-waqas.vercel.app/",
        featured: false,
      },
  ]
