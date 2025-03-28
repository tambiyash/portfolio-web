"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import GridGlobe from "./grid-globe";
import Button from "../ui/button";
import { AuroraBackground } from "./aurora-bg";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  ...props
}: {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any,
}) => {

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("tambiyash@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
      className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {id === 6 && (
          <AuroraBackground>
            <GridItem id={id} copied={copied} copyEmail={copyEmail} {...props} />
          </AuroraBackground>
        ) || (
            <GridItem id={id} copied={copied} copyEmail={copyEmail} {...props} />
        )
      }
    </div>
  );
};

const GridItem = ({
  copied,
  copyEmail,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  copied: boolean;
  copyEmail: () => void;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => (
  <>
    {/* add img divs */}
    <div className={`${id === 6 && "flex justify-center"} h-full`}>
      <div className="w-full h-full absolute">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-center ")}
          />
        )}
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}     
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>
      {id === 6 && (
        // add background animation , remove the p tag
        <AuroraBackground>
          <div className="absolute z-50 inset-0 flex items-center justify-center dark:text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        </AuroraBackground>
      )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 gap-2"
        )}
      >
        {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
        {/* remove mb-2 mt-2 */}
        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>

        {id === 2 && <GridGlobe />}
        {id === 4 && (
          <div className="h-full w-full bg-[#0A0A0A] rounded-xl p-8 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-48 bg-[#111] rounded-lg p-4 flex flex-col gap-2">
                <div className="w-full h-3 bg-[#222] rounded-full"></div>
                <div className="w-3/4 h-3 bg-[#222] rounded-full"></div>
                <div className="w-1/2 h-3 bg-[#222] rounded-full"></div>
                <div className="w-2/3 h-3 bg-[#222] rounded-full"></div>
              </div>
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative">
            <div
              className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                }`}
            />
            <Button
              title={copied ? "Email copied!" : "Copy my email address"}
              icon={<Copy />}
              position="left"
              handleClick={copyEmail}
              otherClasses={
                `bg-black hover:bg-gray-900 text-white border border-purple-500/30 rounded-md px-4 py-2 flex items-center gap-2
                ${copied && "bg-green-600 hover:bg-green-700"}`
              }
            />
          </div>
        )}
      </div>
    </div>
  </>
);