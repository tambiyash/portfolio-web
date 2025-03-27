"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;


// export default function Navbar() {
//   const [active, setActive] = useState<string | null>(null)

//   return (
//     <div className="relative w-full max-w-2xl mx-auto px-4">
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="About">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/about">About Me</HoveredLink>
//             <HoveredLink href="/skills">Skills</HoveredLink>
//             <HoveredLink href="/experience">Experience</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Projects">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/projects">All Projects</HoveredLink>
//             <HoveredLink href="/projects/web">Web Development</HoveredLink>
//             <HoveredLink href="/projects/mobile">Mobile Apps</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Testimonials">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/testimonials">Client Feedback</HoveredLink>
//             <HoveredLink href="/case-studies">Case Studies</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Contact">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/contact">Get in Touch</HoveredLink>
//             <HoveredLink href="/hire-me">Hire Me</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   )
// }
