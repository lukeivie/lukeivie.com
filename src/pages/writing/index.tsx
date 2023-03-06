// import React from "react";
// import Head from "next/head";
// import { Transition } from "@headlessui/react";
// import { Alert, PageTitle } from "@/components";
// import { compareDesc, format, parseISO } from "date-fns";
// import { Post, allPosts } from "contentlayer/generated";
// import Link from "next/link";

// export async function getStaticProps() {
//   const posts = allPosts.sort((a, b) => {
//     return compareDesc(new Date(a.date), new Date(b.date));
//   });
//   return { props: { posts } };
// }

// export default function Writing({ posts }: { posts: Post[] }) {
//   return (
//     <>
//       <Head>
//         <title>Writing - Luke Ivie</title>
//       </Head>
//       <Transition
//         appear
//         show
//         enter="transition-all duration-500"
//         enterFrom="-translate-y-10 opacity-0"
//         enterTo="translate-y-0 opacity-100"
//         leave="transition-opacity duration-500"
//         leaveFrom="translate-y-0 opacity-100"
//         leaveTo="-translate-y-10 opacity-0"
//       >
//         <div className="max-w-3xl mx-auto pt-0 pb-12">
//           <PageTitle className="mb-10 mx-0 md:mx-3">Writing</PageTitle>
//           <Alert>Coming soon!</Alert>
//           {/* {posts.map((post: Post) => {
//             const slug = post._raw.flattenedPath;
//             return (
//               <article key={slug} className="w-full">
//                 <Link
//                   href={`/writing/${slug}`}
//                   className="flex flex-col md:flex-row md:items-center justify-between md:hover:bg-neutral-100 md:dark:hover:bg-slate-800 p-0 mb-5 md:mb-0 md:p-3 rounded-md"
//                 >
//                   <h2 className="dark:text-white text-xl font-semibold">{post.title}</h2>
//                   <div className="hidden md:inline-flex border-y border-neutral-300 dark:border-slate-800 flex-grow mx-4"></div>
//                   <time dateTime={post.date} className="text-neutral-500 dark:text-slate-500 font-semibold">
//                     {format(parseISO(post.date), "LLLL d, yyyy")}
//                   </time>
//                 </Link>
//               </article>
//             );
//           })} */}
//         </div>
//       </Transition>
//     </>
//   );
// }
