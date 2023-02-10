import React from "react";
import SocialIcon from "./social-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({
  title,
  badge,
  isMainBadge,
  technologies,
  bgClassName,
  siteLink,
  showSiteLinkIcon,
  githubLink,
}) {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-indigo-900 bg-indigo-900">
      <div className="flex flex-col">
        <div className={`group h-52 ${bgClassName} bg-cover bg-center`}>
          <div className="hidden lg:flex items-center justify-center bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-90">
            <a
              href={siteLink}
              target="_blank"
              icon={["far", "external-link"]}
              className="opacity-0 lg:group-hover:opacity-100 items-center justify-center rounded-full px-6 py-2
              border-2 border-indigo-400
              text-indigo-400 hover:text-black
              bg-transparent hover:bg-indigo-400"
            >
              Visit Site
              <FontAwesomeIcon
                icon={["far", "external-link"]}
                className="ml-2"
              />
            </a>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 bg-white flex justify-between items-center border-t-2 border-gray-200">
          <span>
            <div className="mb-1">
              <span className="font-bold">{title}</span>
              {badge && (
                <span
                  className={`ml-2 text-xs px-2 rounded-full ${
                    isMainBadge
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 bg-gray-200"
                  }`}
                >
                  {badge}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500">{technologies}</div>
          </span>
          <span>
            <IconButton
              href={siteLink}
              className="lg:hidden text-black hover:text-indigo-400 text-sm"
              icon={["far", "external-link"]}
              size="text-xl"
            />
            {githubLink && (
              <IconButton
                href={githubLink}
                className="text-black hover:text-indigo-400 px-0 ml-3"
                icon={["fab", "github"]}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

const IconButton = ({ href, icon, size = "text-2xl", className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`px-1 py-4 cursor-pointer ${
        className
          ? className
          : "text-gray-600 hover:text-gray-400 active:text-indigo-400"
      }`}
    >
      <FontAwesomeIcon icon={icon} className={size} />
    </a>
  );
};
