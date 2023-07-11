import { Nav } from "@/components/nav";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/sanity";

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = await getPost(params.slug);
    if (post == null) {
        notFound();
    }

    return (
        <main className="container py-10 md:py-28">
            <Nav>
                <h1 className="text-xl sm:text-2xl font-bold">{post.title}</h1>
            </Nav>
            <article className="prose prose-sm prose-invert">
                <PortableText value={post.body} />
            </article>
        </main>
    );
}
