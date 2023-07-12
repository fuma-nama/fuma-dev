import { Nav } from "@/components/nav";
import { notFound } from "next/navigation";
import {
    getPostQuery,
    getPostsQuery,
    GetPostsResult,
    getClient,
    GetPostResult,
} from "@/lib/sanity";
import { draftMode } from "next/headers";
import { PreviewProvider, PreviewText } from "./preview";
import { PostBody } from "@/components/post-body";

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const query = getPostQuery(params.slug);
    const preview = draftMode().isEnabled;
    const client = getClient(preview);

    const posts: GetPostResult = await client.fetch(query);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <main className="container py-10 md:py-28">
            <Nav>
                <h1 className="text-xl sm:text-2xl font-bold">
                    {posts[0].title}
                </h1>
            </Nav>
            <article className="prose prose-invert max-w-none max-sm:prose-sm">
                {preview ? (
                    <PreviewProvider token={client.config().token!!}>
                        <PreviewText query={query} data={posts} />
                    </PreviewProvider>
                ) : (
                    <PostBody value={posts[0].body} />
                )}
            </article>
        </main>
    );
}

export async function generateStaticParams() {
    const query: GetPostsResult = await getClient(false).fetch(getPostsQuery);

    return query.map((post) => ({
        slug: post.slug,
    }));
}
