"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

import { links } from "@/config";
import { techStack } from "@/data";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";

import { GridGlobe } from "../grid-globe";

const BentoGridLottie = dynamic(() => import("./bento-grid-lottie"), {
  ssr: false,
});


const PipelineVisual = () => (
  <div className="absolute inset-x-5 top-6 z-0 flex flex-col gap-4 lg:inset-x-10 lg:top-10">
    <div className="flex flex-wrap items-center gap-2 text-xs text-white-100 lg:text-sm">
      {["Documents", "OCR", "RAG + LLM", "Structured JSON"].map((step, i, arr) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-white/[0.15] bg-[#10132e] px-3 py-2">
            {step}
          </span>
          {i < arr.length - 1 && <span className="text-purple">&rarr;</span>}
        </div>
      ))}
    </div>

    <pre className="max-w-md overflow-hidden rounded-xl border border-white/[0.1] bg-black/50 p-4 font-mono text-[10px] leading-relaxed text-white-200 lg:text-xs">
      <span className="text-white-100">{"// illustrative output shape"}</span>
      {"\n{\n  "}
      <span className="text-purple">&quot;invoice_no&quot;</span>
      {": "}
      <span className="text-emerald-300">&quot;INV-0001&quot;</span>
      {",\n  "}
      <span className="text-purple">&quot;total&quot;</span>
      {": "}
      <span className="text-emerald-300">&quot;0.00&quot;</span>
      {",\n  "}
      <span className="text-purple">&quot;verified&quot;</span>
      {": "}
      <span className="text-sky-300">true</span>
      {"\n}"}
    </pre>
  </div>
);

const RagSnippet = () => (
  <pre className="pointer-events-none absolute bottom-0 right-0 z-0 hidden w-60 overflow-hidden rounded-tl-xl border-l border-t border-white/[0.1] bg-black/50 p-4 font-mono text-[10px] leading-relaxed text-white-200 sm:block md:w-96 md:text-xs">
    <span className="text-white-100"># retrieve, reason, verify</span>
    {"\n"}
    <span className="text-purple">docs</span>
    {" = vectordb."}
    <span className="text-sky-300">search</span>
    {"(query, k=4)\n"}
    <span className="text-purple">answer</span>
    {" = llm."}
    <span className="text-sky-300">invoke</span>
    {"(prompt(docs))\n"}
    <span className="text-purple">return</span>
    {" mask(answer)"}
  </pre>
);

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
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
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img}
              alt={img}
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute right-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 1 && <PipelineVisual />}

        {id === 5 && <RagSnippet />}

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            titleClassName
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>

          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {techStack.stack1.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}

                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
                {techStack.stack2.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="group relative mt-5">
              <BentoGridLottie copied={copied} />

              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
