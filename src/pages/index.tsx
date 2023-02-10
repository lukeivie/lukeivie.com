import Head from "next/head";
import Layout from "../components/layout";
import Avatar from "../components/avatar";
import Title from "../components/title";
import Subhead from "../components/subhead";
import Button from "../components/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRight } from "@fortawesome/pro-regular-svg-icons";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Luke Ivie</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full flex-1 p-6 md:px-10 md:pb-10">
        <Avatar />
        <Title>Luke Ivie</Title>
        <Subhead>
          Hi there, I'm a Software Engineer with a background in UI/UX, based
          out of Arizona.
        </Subhead>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <Button
            href="https://www.linkedin.com/in/luke-ivie/"
            icon={["fab", "linkedin"]}
            className="mb-3 mr-0 lg:mr-3"
            link
            external
          >
            Message Me
          </Button>
          <Button
            href="/portfolio"
            icon={["far", "briefcase"]}
            link
            className="mb-3"
          >
            See My Work
          </Button>
        </div>
      </div>
    </Layout>
  );
}
