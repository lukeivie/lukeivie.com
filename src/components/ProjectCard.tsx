import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/pro-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  title: string;
  badge: string;
  isMainBadge?: boolean;
  technologies: string;
  bgClassName?: string;
  siteLink?: string;
  githubLink?: string;
};

export default function ProjectCard({
  title,
  badge,
  isMainBadge,
  technologies,
  bgClassName,
  siteLink,
  githubLink,
}: Props) {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-slate-900 bg-slate-900">
      <div className="flex flex-col">
        <div className={`group h-52 ${bgClassName} bg-cover bg-center`}>
          <div className="hidden lg:flex items-center justify-center bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-90">
            <a
              href={siteLink}
              target="_blank"
              className="opacity-0 lg:group-hover:opacity-100 items-center justify-center rounded-full px-6 py-2
              border-2 border-slate-400
              text-slate-400 hover:text-black
              bg-transparent hover:bg-slate-400"
            >
              Visit Site
              <FontAwesomeIcon icon={faExternalLink} className="ml-2" />
            </a>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 bg-white flex justify-between items-center">
          <span>
            <div className="mb-1">
              <span className="font-bold">{title}</span>
              {badge && (
                <span className={`ml-2 text-xs px-2 py-0.5 font-semibold rounded-full text-gray-600 bg-gray-200`}>
                  {badge}
                </span>
              )}
            </div>
            <div className="text-sm font-medium text-gray-500">{technologies}</div>
          </span>
          <span>
            <IconButton
              href={siteLink}
              className="lg:hidden text-black hover:text-indigo-400 text-sm"
              icon={faExternalLink}
              size="text-xl"
            />
            {githubLink && (
              <IconButton href={githubLink} className="text-black hover:text-indigo-400 px-0 ml-3" icon={faGithub} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

type IconButtonProps = {
  href?: string;
  icon: IconProp;
  size?: string;
  className?: string;
};

const IconButton = ({ href, icon, size = "text-2xl", className }: IconButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`px-1 py-4 cursor-pointer ${
        className ? className : "text-gray-600 hover:text-gray-400 active:text-indigo-400"
      }`}
    >
      <FontAwesomeIcon icon={icon} className={size} />
    </a>
  );
};
