import { cn } from "@/utils";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink } from "lucide-react";
import { Badge } from "./Badge";
import { Image } from "./Image";
import { Separator } from "./Separator";
import { Fragment } from "react/jsx-runtime";

import namelyLight from "public/images/experience/namely/light.png";
import namelyDark from "public/images/experience/namely/dark.png";
import discountMagsLight from "public/images/experience/discountmags/light.png";
import discountMagsDark from "public/images/experience/discountmags/dark.png";
import openforceLight from "public/images/experience/openforce/light.png";
import openforceDark from "public/images/experience/openforce/dark.png";
import tangaLight from "public/images/experience/tanga/light.png";
import tangaDark from "public/images/experience/tanga/dark.png";

interface Job {
  id: string;
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
    id: "e1",
    href: "https://namely.com",
    image: { light: namelyLight, dark: namelyDark },
    company: "Namely",
    jobTitle: "Senior Software Engineer",
    start: "2023",
    end: "present",
    isCurrent: true,
  },
  {
    id: "e2",
    href: "https://discountmags.com",
    image: { light: discountMagsLight, dark: discountMagsDark },
    company: "DiscountMags",
    jobTitle: "Full-Stack Software Engineer",
    start: "2022",
    end: "2023",
  },
  {
    id: "e3",
    href: "https://oforce.com",
    image: { light: openforceLight, dark: openforceDark },
    company: "Openforce",
    jobTitle: "UI Engineer/Product Designer",
    start: "2018",
    end: "2022",
  },
  {
    id: "e4",
    href: "https://tanga.com",
    image: { light: tangaLight, dark: tangaDark },
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
            i
          ) => (
            <Fragment key={id}>
              <li>
                <a
                  href={href}
                  target="_blank"
                  className={cn(
                    "group",
                    "flex sm:items-center gap-4",
                    "text-base",
                    "rounded-lg p-4",
                    "hover:bg-zinc-100",
                    "dark:hover:bg-zinc-900"
                  )}
                >
                  <Image alt={company} dark={dark} light={light} />
                  <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex flex-col">
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
                    <div className="flex text-sm mt-3 sm:mt-0">
                      {start} &mdash; {end}
                    </div>
                  </div>
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
