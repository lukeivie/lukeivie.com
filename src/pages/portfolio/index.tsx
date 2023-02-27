import Head from "next/head";
import React, { ReactNode } from "react";
import { satoshi } from "@/lib/font";
import Image, { ImageProps } from "next/image";

import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import Subhead from "../../components/subhead";
import ProjectCard from "../../components/project-card";
import Badge from "../../components/badge";
import Fancybox from "../../components/fancybox";
import { useTechnologies, useProjects } from "../../hooks";
import { cn } from "@/utils";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/pro-regular-svg-icons";
import { Alert } from "@/components";

export default function index() {
  const projects = useProjects();
  const technologies = useTechnologies();

  return (
    <>
      <Head>
        <title>Portfolio - Luke Ivie</title>
      </Head>
      <Transition
        appear
        show
        enter="transition-all duration-500"
        enterFrom="-translate-y-10 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-10 opacity-0"
      >
        <div>
          <Section>
            <div className="flex flex-col">
              <div className="prose max-w-none">
                <PageTitle>Portfolio</PageTitle>
                <Alert color="warning">
                  I am actively working on revamping this page and updating these projects. Check back soon!
                </Alert>
              </div>
            </div>
          </Section>
          {/* <div className="max-w-3xl mx-auto pt-0 pb-12">
            <div className="flex flex-col">
              <div className="prose max-w-none">
                <PageTitle>Work</PageTitle>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects?.map((project) => (
                  <ProjectCard
                    key={project?.title}
                    title={project?.title}
                    badge={project?.badge}
                    technologies={project?.technologies}
                    bgClassName={project?.bgClassName}
                    siteLink={project?.siteLink}
                    githubLink={project?.githubLink}
                  />
                ))}
              </div>
            </div>
          </div> */}

          <Section>
            <div className="flex flex-col">
              <div className="prose">
                <PageTitle>Graphic Work</PageTitle>
                <p className="text-neutral-700 dark:text-slate-300 text-xl mb-6">
                  I do the email marketing graphics for{" "}
                  <a href="https://discountmags.com" target="_blank" className="text-neutral-800 dark:text-slate-200">
                    DiscountMags.com
                  </a>
                  . These are a few of my favorites over the years. I have probably done over 2,000 of these.
                </p>
              </div>
              <div className="columns-2 md:columns-3 gap-6 md:gap-10 space-y-6 md:space-y-10">
                <GraphicCard src="/graphics/1.gif" width={1200} height={3100} alt="email-graphic-1" />
                <GraphicCard src="/graphics/8.gif" width={1200} height={2170} alt="email-graphic-2" />
                <GraphicCard src="/graphics/3.gif" width={1200} height={2864} alt="email-graphic-3" />
                <GraphicCard src="/graphics/5.gif" width={1200} height={1910} alt="email-graphic-4" />
                <GraphicCard src="/graphics/7.gif" width={1200} height={1600} alt="email-graphic-5" />
                <GraphicCard src="/graphics/2.gif" width={1200} height={2292} alt="email-graphic-6" />
                <GraphicCard src="/graphics/9.png" width={1200} height={2134} alt="email-graphic-7" />
                <GraphicCard src="/graphics/10.gif" width={1200} height={2400} alt="email-graphic-8" />
                <GraphicCard src="/graphics/11.gif" width={1200} height={2000} alt="email-graphic-9" />
                <GraphicCard src="/graphics/12.gif" width={1200} height={2300} alt="email-graphic-10" />
              </div>
            </div>
          </Section>

          {/* <div className="max-w-3xl mx-auto pt-6 lg:pt-20 lg:mb-28">
        <div className="flex flex-col">
          <div>
            <PageTitle>Branding and Logo Design</PageTitle>
            <Subhead>
              I don't do a ton of branding or logo design anymore, but I've done
              a few that I think turned out pretty nicely.
            </Subhead>
          </div>
        </div>
      </div> */}
        </div>
      </Transition>
    </>
  );
}

type GraphicCardProps = ImageProps & {
  className?: string;
};
const GraphicCard = ({ alt, src, width, height, className }: GraphicCardProps) => {
  return (
    <div className={cn("rounded-md overflow-hidden drop-shadow-lg border-2 border-black dark:border-none", className)}>
      <Image src={src} alt={alt} width={width} height={height} data-fancybox="gallery" data-src={src} />
    </div>
  );
};

function Section({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl mx-auto mb-10 lg:mb-28">{children}</div>;
}
