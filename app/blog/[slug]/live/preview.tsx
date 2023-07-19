"use client";
import { PostBody } from "./body";
import { GetPostResult, createPreviewClient } from "@/lib/sanity";
import { LiveQueryProvider, useLiveQuery } from "next-sanity/preview";
import { ReactNode, useMemo } from "react";

export function PreviewProvider({
    token,
    children,
}: {
    token: string;
    children: ReactNode;
}) {
    const client = useMemo(() => createPreviewClient(token), [token]);

    return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}

export function PreviewText({
    data,
    query,
}: {
    query: string;
    data: GetPostResult;
}) {
    const [post] = useLiveQuery<GetPostResult>(data, query);

    return <PostBody value={post[0].body} />;
}
