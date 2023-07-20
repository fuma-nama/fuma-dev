import { notFound } from "next/navigation";
import {
    getPostQuery,
    getPostsQuery,
    GetPostsResult,
    getClient,
    GetPostResult,
} from "@/lib/sanity";
import { draftMode } from "next/headers";
import Link from "next/link";
import { PreviewAlert } from "@/components/preview-alert";
import { PostBody } from "@/components/post-body";
import { Metadata } from "next";

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const preview = draftMode().isEnabled;
    const query = getPostQuery(params.slug);
    const client = getClient(preview);
    const posts = await client.fetch<GetPostResult>(query);

    if (posts.length === 0) {
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
                <PostBody value={posts[0].body} />
            </article>
        </main>
    );
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const post = await getClient(false)
        .fetch<GetPostResult>(getPostQuery(params.slug))
        .then((res) => res[0]);

    if (post == null) {
        return;
    }

    const categories = post.categories.map((category) => category.title);
    return {
        title: post.title,
        description: "My Personal Blog.",
        authors: [{ name: post.author.name }],
        category: categories.join(", "),
        openGraph: {
            tags: categories,
            type: "article",
            siteName: "Money Shark",
            title: post.title,
            description: "My Personal Blog.",
            publishedTime: post.publishedAt,
        },
    } as Metadata;
}

export async function generateStaticParams() {
    const query: GetPostsResult = await getClient(false).fetch(getPostsQuery);

    return query.map((post) => ({
        slug: post.slug,
    }));
}
