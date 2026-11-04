import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaLocationArrow } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

const socials = [
  { name: "GitHub", href: links.github, Icon: FaGithub },
  { name: "LinkedIn", href: links.linkedin, Icon: FaLinkedinIn },
  { name: "LeetCode", href: links.leetcode, Icon: SiLeetcode },
  { name: "Email", href: `mailto:${links.ownerEmail}`, Icon: FaEnvelope },
] as const;

export const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt=""
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for an <span className="text-purple">AI/ML engineer</span>{" "}
          who ships?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          I&apos;m in Doha, available immediately, with a valid QID and NOC
          &mdash; no sponsorship needed. Let&apos;s talk about your GenAI, RAG or
          document intelligence project.
        </p>

        <p className="text-center text-sm text-white-100">
          {links.ownerEmail} &middot; {links.ownerPhone}
        </p>

        <Link
          href={`mailto:${links.ownerEmail}`}
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-10"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            asChild
          />
        </Link>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            {links.ownerFullName}
          </Link>
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socials.map(({ name, href, Icon }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={name}
              aria-label={name}
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
