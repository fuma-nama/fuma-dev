import { createClient } from "next-sanity";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2022-03-25",
    useCdn: false,
});

const preview_client = client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "previewDrafts",
});

export type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    body: any;
};

export type GetPostResult = Pick<
    Post,
    "_id" | "body" | "publishedAt" | "slug" | "title"
>[];

export const getPostQuery = (
    slug: string
) => `*[_type == "post" && slug.current == "${slug}"] {
            _id,
            title,
            publishedAt,
            'slug': slug.current,
            body
        }`;

export type GetPostsResult = Pick<
    Post,
    "_id" | "publishedAt" | "slug" | "title"
>[];

export const getPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            publishedAt,
            'slug': slug.current,
        }`;

export function getClient(preview: boolean) {
    return preview ? preview_client : client;
}

export function createPreviewClient(token: string) {
    return preview_client.withConfig({
        token: token,
    });
}
