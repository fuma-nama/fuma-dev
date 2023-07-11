import { createClient } from "next-sanity";

const client = createClient({
    projectId: "dfgch9es",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
});

type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    body: any;
};

export async function getPost(
    slug: string
): Promise<Pick<
    Post,
    "_id" | "body" | "publishedAt" | "slug" | "title"
> | null> {
    const posts = await client.fetch(
        `*[_type == "post" && slug.current == "${slug}"] {
            _id,
            title,
            publishedAt,
            'slug': slug.current,
            body
        }`
    );

    return posts[0];
}

export async function getPosts(): Promise<
    Pick<Post, "_id" | "publishedAt" | "slug" | "title">[]
> {
    const posts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            publishedAt,
            'slug': slug.current,
        }`
    );

    return posts;
}
