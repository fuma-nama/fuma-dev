import { createClient } from "next-sanity";
import { cache } from "react";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2022-03-25",
    useCdn: false,
});

client.fetch = cache(client.fetch.bind(client));

const preview_client = client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "previewDrafts",
});

preview_client.fetch = cache(preview_client.fetch.bind(preview_client));

export type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    body: any;
    categories?: { title: string }[];
    author: {
        name: string;
    };
};

export type GetPostResult = Pick<
    Post,
    "_id" | "body" | "publishedAt" | "slug" | "title" | "author" | "categories"
>[];

export const getPostQuery = (
    slug: string
) => `*[_type == "post" && slug.current == "${slug}"] {
            _id,
            title,
            publishedAt,
            author->,
            'slug': slug.current,
            'categories': categories[]->{title},
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
