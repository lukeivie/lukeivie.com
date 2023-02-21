import React from "react";
import Head from "next/head";
import { Transition } from "@headlessui/react";
import { Alert, PageTitle } from "@/components";

export default function index() {
  return (
    <>
      <Head>
        <title>Writing | Luke Ivie</title>
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
        <div className="max-w-3xl mx-auto pt-0 pb-12">
          <div className="prose max-w-none">
            <PageTitle>Writing</PageTitle>
            <Alert color="warning">Coming soon!</Alert>
          </div>
        </div>
      </Transition>
    </>
  );
}
