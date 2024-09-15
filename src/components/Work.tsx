import { cn } from "@/utils";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink } from "lucide-react";
import { Badge } from "./Badge";
import namely from "public/images/experience/namely.png";
import discountMags from "public/images/experience/discountmags.png";
import openforce from "public/images/experience/openforce.png";
import tanga from "public/images/experience/tanga.png";
import { Separator } from "./Separator";
import { Fragment } from "react/jsx-runtime";

interface Job {
  id: string;
  href: string;
  image: ImageMetadata;
  company: string;
  jobTitle: string;
  start: string;
  end: string;
  isCurrent?: boolean;
}

const jobs: Job[] = [
  {
    id: "e1",
    href: "https://namely.com",
    image: namely,
    company: "Namely",
    jobTitle: "Senior Software Engineer",
    start: "2023",
    end: "present",
    isCurrent: true,
  },
  {
    id: "e2",
    href: "https://discountmags.com",
    image: discountMags,
    company: "DiscountMags",
    jobTitle: "Full-Stack Software Engineer",
    start: "2022",
    end: "2023",
  },
  {
    id: "e3",
    href: "https://oforce.com",
    image: openforce,
    company: "Openforce",
    jobTitle: "UI Engineer/Product Designer",
    start: "2018",
    end: "2022",
  },
  {
    id: "e4",
    href: "https://tanga.com",
    image: tanga,
    company: "Tanga",
    jobTitle: "UI Developer/UI Designer",
    start: "2015",
    end: "2018",
  },
];

export const Work = () => {
  return (
    <Section>
      <SectionHeader>Work Experience</SectionHeader>
      <ul className="flex flex-col gap-1">
        {jobs.map(
          (
            { id, href, image, company, jobTitle, start, end, isCurrent },
            i
          ) => (
            <Fragment key={id}>
              <li>
                <a
                  href={href}
                  target="_blank"
                  className={cn(
                    "group",
                    "flex flex-row items-center justify-between",
                    "text-base",
                    "rounded-lg p-4",
                    "hover:bg-zinc-100",
                    "dark:hover:bg-zinc-900"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <img
                        src={image?.src}
                        alt={company}
                        className="rounded-md w-12 h-12 text-xs break-words shadow-lg border dark:border-zinc-800"
                      />
                    </div>
                    <div>
                      <div className="flex gap-1 items-center">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-medium">{company}</h3>
                          {isCurrent && <Badge>Current</Badge>}
                        </div>
                        <ExternalLink
                          size={18}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-zinc-400"
                        />
                      </div>
                      <p className="text-base text-zinc-500">{jobTitle}</p>
                    </div>
                  </div>
                  <span className="text-sm">
                    {start} &mdash; {end}
                  </span>
                </a>
              </li>
              {!!jobs[i + 1] && <Separator className="mx-4" />}
            </Fragment>
          )
        )}
      </ul>
    </Section>
  );
};
