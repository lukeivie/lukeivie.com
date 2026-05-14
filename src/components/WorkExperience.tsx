import { cn } from "@/utils";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/Badge";
import { Image } from "./ui/Image";
import { SectionCard } from "./ui/SectionCard";
import { Separator } from "./ui/Separator";
import { Fragment } from "react/jsx-runtime";
import { Timeline } from "./ui/Timeline";

import namelyLight from "public/images/experience/namely/light.png";
import namelyDark from "public/images/experience/namely/dark.png";
import discountMagsLight from "public/images/experience/discountmags/light.png";
import discountMagsDark from "public/images/experience/discountmags/dark.png";
import openforceLight from "public/images/experience/openforce/light.png";
import openforceDark from "public/images/experience/openforce/dark.png";
import tangaLight from "public/images/experience/tanga/light.png";
import tangaDark from "public/images/experience/tanga/dark.png";

interface Job {
  id: number;
  href: string;
  image: { dark: ImageMetadata; light: ImageMetadata };
  company: string;
  jobTitle: string;
  start: string;
  end: string;
  isCurrent?: boolean;
}

const jobs: Job[] = [
  {
    id: 1,
    href: "https://namely.com",
    image: { light: namelyLight, dark: namelyDark },
    company: "Namely",
    jobTitle: "Senior Software Engineer",
    start: "2023",
    end: "Now",
    isCurrent: true,
  },
  {
    id: 2,
    href: "https://discountmags.com",
    image: { light: discountMagsLight, dark: discountMagsDark },
    company: "DiscountMags",
    jobTitle: "Full-Stack Software Engineer",
    start: "2022",
    end: "2023",
  },
  {
    id: 3,
    href: "https://oforce.com",
    image: { light: openforceLight, dark: openforceDark },
    company: "Openforce",
    jobTitle: "Full-Stack Developer, UX Developer II",
    start: "2018",
    end: "2022",
  },
  {
    id: 4,
    href: "https://tanga.com",
    image: { light: tangaLight, dark: tangaDark },
    company: "Tanga",
    jobTitle: "UI Developer/UI Designer",
    start: "2015",
    end: "2018",
  },
];

export const WorkExperience = () => {
  return (
    <Section>
      <SectionHeader>Work Experience</SectionHeader>
      <ul aria-label="Work experience" className="flex flex-col gap-1">
        {jobs.map(
          (
            {
              id,
              href,
              image: { dark, light },
              company,
              jobTitle,
              start,
              end,
              isCurrent,
            },
            i,
          ) => (
            <Fragment key={id}>
              <li>
                <SectionCard
                  href={href}
                  aria-label={`${company} — ${jobTitle} (opens in new tab)`}
                  className="flex sm:items-center gap-4"
                >
                  <Image alt={company} dark={dark} light={light} />
                  <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex flex-col">
                      <div className="flex gap-1 items-center">
                        <div className="flex items-center gap-2">
                          <h3
                            className={cn(
                              "text-base font-medium",
                              "group-hover:text-zinc-700 group-focus-visible:text-zinc-700 group-active:text-zinc-800",
                              "dark:group-hover:text-zinc-300 dark:group-focus-visible:text-zinc-300 dark:group-active:text-zinc-200",
                            )}
                          >
                            {company}
                          </h3>
                          {isCurrent && <Badge>Current</Badge>}
                        </div>
                        <ExternalLink
                          size={18}
                          aria-hidden="true"
                          className={cn(
                            "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200",
                            "text-zinc-400 dark:text-zinc-400",
                            "group-hover:text-zinc-500 group-focus-visible:text-zinc-500 group-active:text-zinc-600",
                            "dark:group-hover:text-zinc-300 dark:group-focus-visible:text-zinc-300 dark:group-active:text-zinc-200",
                          )}
                        />
                      </div>
                      <p
                        className={cn(
                          "text-base text-zinc-500",
                          "group-hover:text-zinc-600 group-focus-visible:text-zinc-600 group-active:text-zinc-700",
                          "dark:group-hover:text-zinc-400 dark:group-focus-visible:text-zinc-400 dark:group-active:text-zinc-300",
                        )}
                      >
                        {jobTitle}
                      </p>
                    </div>
                    <Timeline start={start} end={end} />
                  </div>
                </SectionCard>
              </li>
              {!!jobs[i + 1] && <Separator className="mx-4" />}
            </Fragment>
          ),
        )}
      </ul>
    </Section>
  );
};
