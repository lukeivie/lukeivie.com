import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import profileImage from "@/assets/images/profile-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRight } from "@fortawesome/pro-regular-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

type Props = {};

export default function AboutView({}: Props) {
  // function getCurrentTime() {
  //   return new Date().toLocaleTimeString("en-US", {
  //     timeZone: "America/Phoenix",
  //   });
  // }

  // const [currentDateTime, setCurrentDateTime] = useState(getCurrentTime());

  // useEffect(() => {
  //   const intervalId = setInterval(() => setCurrentDateTime(getCurrentTime()), 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Luke Ivie</title>
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
        <div className="flex flex-col items-center justify-center dark:text-slate-300 text-neutral-800">
          <div className="max-w-3xl px-0 md:px-3 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-6">
              {/* <span className="inline-flex dark:bg-gradient-to-br dark:from-slate-200 dark:via-slate-700 dark:to-slate-900 dark:p-[1px] rounded-full"> */}
              <Image
                src={profileImage}
                alt="Luke Ivie"
                width={100}
                height={100}
                className="rounded-full grayscale dark:grayscale-0"
              />
              {/* </span> */}
            </div>
            <div className="mb-6 md:mb-10 text-lg md:text-xl text-neutral-700 dark:text-slate-400 prose prose-headings:dark:text-slate-400 prose-h4:mt-12 prose-a:dark:text-slate-300 prose-a:transition-colors">
              <p>
                <span className="inline-block font-extrabold text-4xl text-neutral-900 dark:text-slate-200 mr-2">
                  Luke Ivie.
                </span>
                I am a full-stack software engineer who specializes in building web applications using
                JavaScript/Typescript and React.
              </p>
              <p>
                I am trained in agile and scrum methodologies and have worked for multiple SaaS companies. I also have
                UI/UX design experience, and I tend to work hybrid engineering/design roles.
              </p>
              <p>
                I am highly passionate about technology and user experience. I believe every decision made in software
                should revolve around crafting the best possible experience for the end users.
              </p>
              <p className="hidden md:inline">
                Currently at{" "}
                <a href="https://discountmags.com" target="_blank">
                  DiscountMags.com
                </a>
                .{" "}
                <span className="hidden md:inline">
                  Previously UI Engineer at{" "}
                  <a href="https://oforce.com" target="_blank">
                    Openforce
                  </a>
                  . Before that – UI Developer/UX Designer at{" "}
                  <a href="https://tanga.com" target="_blank">
                    Tanga
                  </a>
                  .
                </span>
              </p>
              <p>
                Self-improvement is my primary focus in life. I seek to always be learning{" "}
                <span className="md:hidden">the new</span>
                <span className="hidden md:inline">new things</span>, evolving my craft, and becoming a better engineer,
                designer and
                <span className="hidden md:inline"> overall</span> human-being.
              </p>
            </div>
            <p className="flex items-center flex-wrap gap-6 md:gap-10 pt-2 md:pt-0">
              <a
                href="https://twitter.com/IvieLuke"
                target="_blank"
                className="flex items-center text-base md:text-lg hover:text-blue-twitter transition-colors duration-200 py-0 md:pb-2"
              >
                <FontAwesomeIcon icon={faTwitter} className="mr-1" fixedWidth />{" "}
                <span className="font-semibold">Twitter</span>
                <FontAwesomeIcon icon={faArrowUpRight} className="ml-2 mt-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/luke-ivie/"
                target="_blank"
                className="flex items-center text-base md:text-lg hover:text-blue-linkedIn transition-colors duration-200 py-0 md:pb-2"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-1" fixedWidth />{" "}
                <span className="font-semibold">LinkedIn</span>
                <FontAwesomeIcon icon={faArrowUpRight} className="ml-2 mt-1" />
              </a>
              <a
                href="https://www.github.com/lukeivie"
                target="_blank"
                className="flex items-center text-base md:text-lg hover:text-slate-400 transition-colors duration-200 py-0 md:pb-2"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-1" fixedWidth />{" "}
                <span className="font-semibold">GitHub</span>
                <FontAwesomeIcon icon={faArrowUpRight} className="ml-2 mt-1" />
              </a>
            </p>

            {/* <Transition
              appear
              show
              enter="transition-opacity delay-1000 duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity delay-1000 duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <p className="text-neutral-500 mt-10">
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1.5" />
                  {currentDateTime}
                </span>
                <span className="mx-2 opacity-50">–</span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1.5" />
                Mesa, Arizona
              </p>
            </Transition> */}
          </div>
        </div>
      </Transition>
    </>
  );
}
