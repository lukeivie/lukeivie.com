import { Link } from "./Link";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export const Summary = () => (
  <div className="flex flex-col gap-6 sm:gap-8">
    <a href="/" className="inline-flex self-start px-4 group">
      <Logo className="w-10 sm:w-12 group-hover:scale-125 group-active:scale-100 transition-all" />
    </a>
    <h1 className="text-xl sm:text-2xl dark:text-zinc-300 px-4">
      <span className="font-bold text-zinc-700 dark:text-zinc-300">
        Luke Ivie
      </span>
    </h1>
    <div className="flex flex-col gap-4 font-normal text-zinc-600 dark:text-zinc-400 leading-normal text-base sm:text-lg px-4">
      <p>
        I am a Senior Software Engineer who specializes in building web
        applications using Typescript and React.
      </p>
      <p>
        I am passionate about creating simple and elegant digital experiences.
      </p>
      <p className="hidden sm:block">
        Currently Senior Software Engineer at{" "}
        <Link href="https://namely.com">Namely</Link>. Previously Full-Stack
        Engineer at <Link href="https://discountmags.com">DiscountMags</Link>.
        Before that - UI Engineer at{" "}
        <Link href="https://oforce.com">Openforce</Link>.
      </p>
      <p>
        Self-improvement is my primary focus in life. I strive to always be
        learning new things, evolving my craft, and becoming a better engineer
        and overall human-being.
      </p>
    </div>
    <SocialLinks />
  </div>
);
