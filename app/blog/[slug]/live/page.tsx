import { notFound } from "next/navigation";
import { getPostQuery, getClient, GetPostResult } from "@/lib/sanity";
import { draftMode } from "next/headers";

import Link from "next/link";
import { PreviewAlert } from "@/components/preview-alert";
import { PreviewProvider, PreviewText } from "./preview";

/**
 * Used to ensure the main blog page is rendered at server-side only
 */
export default async function LiveBlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const query = getPostQuery(params.slug);
    const preview = draftMode().isEnabled;
    const client = getClient(preview);

    const posts: GetPostResult = await client.fetch(query);

    if (!preview || posts.length === 0) {
        notFound();
    }

    const date = new Date(posts[0].publishedAt).toDateString();

    return (
        <main className="container py-10 md:py-28 mb-14">
            <PreviewAlert />
            <div className="flex flex-row flex-wrap-reverse gap-4 items-end justify-between mb-12">
                <div>
                    <h1 className="text-xl sm:text-3xl font-bold mb-3">
                        {posts[0].title}
                    </h1>
                    <p className="text-sm text-muted-foreground">{date}</p>
                </div>

                <Link href="/blog" className="text-sm">
                    Back -&gt;
                </Link>
            </div>
            <article className="prose prose-invert max-w-none max-sm:prose-sm">
                <PreviewProvider token={client.config().token!!}>
                    <PreviewText query={query} data={posts} />
                </PreviewProvider>
            </article>
        </main>
    );
}
