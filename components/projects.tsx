"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Globe } from 'lucide-react';
import { mapTechIcons, projectsList, socials } from '@/data';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import Button from './ui/button';
import { BentoGrid } from './ui/bento-grid';

const Projects = () => {
  const handleButtonClick = (name: string) => {
    window.open(`https://github.com/${socials.github}/${name}`, "_blank");
  }

  return (
    <section id="projects" className="py-10">
        <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-20"
        >
            Some other <span className="text-purple-500">pet projects</span> of mine.
        </motion.h2>
        <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-row-4 gap-2 md:gap-4 mx-auto">
            {projectsList.map((project, i) => {
                return (
                    <Link key={i} href={project.link} target="_blank">
                        <CardContainer className="bg-zinc-50 text-slate-950 dark:bg-zinc-900 rounded-2xl min-w-[25vw] md:max-w-[35vw] lg:mr-5">
                            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-purple-700"
                                >
                                    {project.name}
                                </CardItem>
                                <CardItem
                                    translateZ="60"
                                    className="text-sm font-bold text-slate-700"
                                >
                                    {project.description}
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    className="w-full mt-4"
                                >
                                    <Image
                                        src={project.img}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w- object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={project.name}
                                    />
                                </CardItem>
                                <CardItem
                                    translateZ="20"
                                    className="mt-4"
                                >
                                    <Button
                                        onClick={() => handleButtonClick(project.name)}
                                        title="View on Github"
                                        icon={<Globe />}
                                        position="left"
                                        className=""
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </Link>
                );
            })}
        </BentoGrid>
    </section>
  )
}

export default Projects;