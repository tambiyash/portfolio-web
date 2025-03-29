import { React as ReactIcon, NextJs, Redux, TailwindCSS, NodeJs, TypeScript, JavaScript, GraphQL, GitHubLight, HTML5, CSS } from "developer-icons";
import { ChartLine, CopyPlus, Gem, HardHat, House, LibraryBig, MessageSquare, Microscope, PanelsTopLeft, Projector, SmilePlus, SquareChartGantt, TrafficCone, UserPen, Users } from "lucide-react";
import React from "react";

export const navItems = [
  { name: 'Home', link: '#', icon: <House /> },
  { name: 'About', link: '#about', icon: <UserPen /> },
  { name: 'Skills', link: '#skills', icon: <Gem /> },
  { name: 'Testimonials', link: '#testimonials', icon: <SmilePlus /> },
  { name: 'Projects', link: '#projects', icon: <PanelsTopLeft /> },
  { name: 'Contact', link: '#contact', icon: <MessageSquare /> },
]

export const mapTechIcons: { [key: string]: React.ReactNode } = {
  "HTML5": <HTML5 />,
  "CSS": <CSS />,
  "ReactJS": <ReactIcon />,
  "Redux": <Redux />,
  "NextJS": <NextJs />,
  "JavaScript": <JavaScript />,
  "TailwindCSS": <TailwindCSS />,
  "TypeScript": <TypeScript />,
  "GraphQL": <GraphQL />,
  "NodeJS": <NodeJs />,
  "GitHub": <GitHubLight />,
  "Team Mentoring": <LibraryBig className="w-full h-full" />,
  "X-Functional Collab": <Projector className="w-full h-full" />,
  "Roadmap Planning": <TrafficCone className="w-full h-full" />,
  "Analytics-Driven Dev": <ChartLine className="w-full h-full" />,
  "JIRA": <HardHat className="w-full h-full" />,
  "Confluence": <SquareChartGantt className="w-full h-full" />,
  "Market Research": <Microscope className="w-full h-full" />,
  "User Persona": <Users className="w-full h-full" />,
  "...and many more": <CopyPlus className="w-full h-full" />,
}

export const technologies: { name: string, level: string }[] = [
  { name: "ReactJS", level: "Advanced"},
  { name: "Redux", level: "Intermediate"},
  { name: "NextJS", level: "Intermediate"},
  { name: "JavaScript", level: "Advanced"},
  { name: "TailwindCSS", level: "Advanced"},
  { name: "TypeScript", level: "Advanced"},
  { name: "GraphQL", level: "Intermediate"},
  { name: "NodeJS", level: "Intermediate"},
  { name: "GitHub", level: "Advanced"},
]

export const otherSkills: { name: string, level?: string}[] = [
  { name: "Team Mentoring", level: "Intermediate"},
  { name: "X-Functional Collab", level: "Intermediate"},
  { name: "Roadmap Planning", level: "Intermediate"},
  { name: "Analytics-Driven Dev", level: "Intermediate"},
  { name: "JIRA", level: "Advanced"},
  { name: "Confluence", level: "Advanced"},
  { name: "Market Research", level: "Beginneer"},
  { name: "User Persona", level: "Beginneer"},
  { name: "...and many more"},
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

export const codeString = [`
const ButtonComponent = () => {
  const [count, setCount] = React.useState(0);
 
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`,
`.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
`];

export const socials = {
  github: "tambiyash",
  linkedin: "yash-tambi-817667a6",
  twitter: "tambiyash78"
}

export const projectsList = [
  { name: "react-hangman", type: "game", description: "Hangman, the nostalgic game we all loved!", link: "https://tambiyash.github.io/react-hangman", img: "/project-hangman.png", technologies: ["ReactJS", "JavaScript", "HTML5", "CSS"] },
  { name: "cocktails-next", type: "f&b", description: "Search for any cocktail, you'd like!", link: "https://cocktails-next-ten.vercel.app/", img: "/project-cocktails.png", technologies: ["NextJS", "ReactJS", "Redux", "JavaScript", "TypeScript", "TailwindCSS"] },
  { name: "snake", type: "game", description: "Try not to eat your own tail..", link: "https://tambiyash.github.io/snake/", img: "/project-snake.png", technologies: ["HTML5", "CSS", "JavaScript"] },
]

export const testimonials = [
  {
    name: "Richard Smullen", 
    designation: "CEO at Pypestream Inc.", 
    src: "/testimonial-1.jpeg",
    linkedInSrc: "https://www.linkedin.com/in/richardsmullen/",
    quote: "Yash is a very talented and highly productive product developer and team leader. He is passionate about technology and understands the inner workings of organizations, and their multitude of layers and organizations. He navigates it all well and is a very comfortable in fast paced environments. Yash grew from a junior product developer to an overall product Manager, managing a team and delivering great outcomes. He is dependable and very reliable."
  },
  {
    name: "Nour Sammour", 
    designation: "Fullstack Developer at Pypestream Inc.", 
    src: "/testimonial-2.jpeg",
    linkedInSrc: "https://www.linkedin.com/in/nour-sammour-a3746474/",
    quote: "I had the pleasure of working with Yash at Pypestream, where he excelled as a Product Owner, Scrum Master, and Developer. He seamlessly balanced leadership and hands-on development, ensuring smooth sprints, clear priorities, and strong collaboration. His technical expertise and problem-solving skills made a significant impact on our team’s success. Any team would be lucky to have him!"
  },
  {
    name: "Abhishek Thorat", 
    designation: "Frontend Developer at GreenOrbit", 
    src: "/testimonial-3.jpeg",
    linkedInSrc: "https://www.linkedin.com/in/abhishek-thorat-143aa2bb/",
    quote: "I had the privilege of working with Yash across multiple companies and roles, most recently at Pypestream where we collaborated both as engineering peers and in a product-engineering partnership. His versatility truly stood out as he successfully transitioned from engineering to product ownership."
  },
]