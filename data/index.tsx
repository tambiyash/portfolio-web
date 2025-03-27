import { React as ReactIcon, NextJs, Redux, TailwindCSS, NodeJs, TypeScript, JavaScript, GraphQL, GitHubLight } from "developer-icons";
import { ChartLine, CopyPlus, Gem, HardHat, House, LibraryBig, Microscope, PanelsTopLeft, Projector, SmilePlus, SquareChartGantt, TrafficCone, UserPen, Users } from "lucide-react";

export const navItems = [
  { name: 'Home', link: '#', icon: <House /> },
  { name: 'About', link: '#about', icon: <UserPen /> },
  { name: 'Skills', link: '#skills', icon: <Gem /> },
  { name: 'Projects', link: '#projects', icon: <PanelsTopLeft /> },
  { name: 'Testimonials', link: '#testimonials', icon: <SmilePlus /> },
]

export const technologies: { name: string, level: string, icon: React.ReactNode }[] = [
  { name: "ReactJS", level: "Advanced", icon: <ReactIcon />},
  { name: "Redux", level: "Intermediate", icon: <Redux /> },
  { name: "NextJS", level: "Intermediate", icon: <NextJs /> },
  { name: "JavaScript", level: "Advanced", icon: <JavaScript /> },
  { name: "TailwindCSS", level: "Advanced", icon: <TailwindCSS /> },
  { name: "TypeScript", level: "Advanced", icon: <TypeScript /> },
  { name: "GraphQL", level: "Intermediate", icon: <GraphQL /> },
  { name: "NodeJS", level: "Intermediate", icon: <NodeJs /> },
  { name: "GitHub", level: "Advanced", icon: <GitHubLight /> },
]

export const otherSkills: { name: string, level?: string, icon: React.ReactNode }[] = [
  { name: "Team Mentoring", level: "Intermediate", icon: <LibraryBig className="w-full h-full" /> },
  { name: "X-Functional Collab", level: "Intermediate", icon: <Projector className="w-full h-full" /> },
  { name: "Roadmap Planning", level: "Intermediate", icon: <TrafficCone className="w-full h-full" /> },
  { name: "Analytics-Driven Dev", level: "Intermediate", icon: <ChartLine className="w-full h-full" /> },
  { name: "JIRA", level: "Advanced", icon: <HardHat className="w-full h-full" /> },
  { name: "Confluence", level: "Advanced", icon: <SquareChartGantt className="w-full h-full" /> },
  { name: "Market Research", level: "Beginneer", icon: <Microscope className="w-full h-full" /> },
  { name: "User Persona", level: "Beginneer", icon: <Users className="w-full h-full" /> },
  { name: "...and many more", icon: <CopyPlus className="w-full h-full" /> },
]

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-contain",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    content: `
      <div className="h-full w-full bg-[#0A0A0A] rounded-xl p-8 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-64 h-48 bg-[#111] rounded-lg p-4 flex flex-col gap-2">
            <div className="w-full h-3 bg-[#222] rounded-full"></div>
            <div className="w-3/4 h-3 bg-[#222] rounded-full"></div>
            <div className="w-1/2 h-3 bg-[#222] rounded-full"></div>
            <div className="w-2/3 h-3 bg-[#222] rounded-full"></div>
          </div>
        </div>
      </div>`,
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const codeStrings = [
  `// Importing a single module
import moduleName from 'modulePath';`,
  `// Importing multiple modules
import { module1, module2 } from 'modulePath';`,
]

export const socials = {
  github: "tambiyash",
  linkedin: "yash-tambi-817667a6",
  twitter: "tambiyash78"
}