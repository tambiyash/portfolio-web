"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Me</HoveredLink>
            <HoveredLink href="/skills">Skills</HoveredLink>
            <HoveredLink href="/experience">Experience</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects">All Projects</HoveredLink>
            <HoveredLink href="/projects/web">Web Development</HoveredLink>
            <HoveredLink href="/projects/mobile">Mobile Apps</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Testimonials">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/testimonials">Client Feedback</HoveredLink>
            <HoveredLink href="/case-studies">Case Studies</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Get in Touch</HoveredLink>
            <HoveredLink href="/hire-me">Hire Me</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}