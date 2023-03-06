import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post, allPosts } from "contentlayer/generated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return {
    props: {
      post,
    },
  };
}

export default function PostLayout({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="mx-auto max-w-3xl mb-5">
        <Link
          href="/writing"
          className="text-neutral-600 hover:text-neutral-700 active:text-neutral-800 dark:text-slate-300 dark:hover:text-slate-200 dark:active:text-slate-100"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Link>
      </div>
      <article className="mx-auto max-w-3xl prose dark:prose-headings:text-slate-100 dark:prose-a:text-slate-200 dark:prose-strong:text-slate-200">
        <div className="mb-6">
          <h1 className="mb-1 text-3xl font-bold dark:text-white">{post.title}</h1>
          <time dateTime={post.date} className="text-neutral-500 dark:text-slate-500">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          className="cl-post-body text-neutral-900 dark:text-slate-300 text-lg"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
}
