import { Image } from "./Image";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import me from "public/images/me.jpg";

import { Timeline } from "./Timeline";

export const Freelance = () => (
  <Section>
    <SectionHeader>Freelance</SectionHeader>
    <div className="p-4 flex flex-col sm:flex-row gap-4">
      <Image
        light={me}
        dark={me}
        alt="Luke Ivie"
        className="w-20 h-20 !rounded-full"
      />
      <div className="flex flex-col text-base text-zinc-500 gap-4">
        <p>
          Since 2018, I have been doing freelance work as a designer/engineer.
        </p>
        <p>
          I provide design consulting, development work, brand identity & logo
          design, and I make graphics for email marketing campaigns.
        </p>
        <p>
          If you have a project you think I might be interested in, feel free to
          reach out!
        </p>
      </div>
      <div className="flex items-center">
        <Timeline start="2018" end="Now" />
      </div>
    </div>
  </Section>
);
