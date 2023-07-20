"use client";
import {
    PortableText,
    PortableTextTypeComponentProps,
} from "@portabletext/react";
import { SpotifyEmbed } from "@/components/spotify-embed";
import { Highlighter, IThemedToken, getHighlighter, setCDN } from "shiki";
import { useEffect, useState } from "react";

declare global {
    var highlighter: Promise<Highlighter>;
}

async function get() {
    if (global.highlighter != null) return global.highlighter;

    setCDN("https://unpkg.com/shiki");
    return (global.highlighter = getHighlighter({
        langs: ["json", "sql"],
        theme: "dracula",
    }));
}

export function PostBody({ value }: { value: any }) {
    return (
        <PortableText
            value={value}
            components={{
                types: {
                    code: CodeBlock,
                    "spotify-embed": SpotifyEmbed,
                },
            }}
        />
    );
}

function CodeBlock({
    value: { language = "text", code },
}: PortableTextTypeComponentProps<{
    language?: string;
    code: string;
}>) {
    const [tokens, setTokens] = useState<IThemedToken[][]>([]);

    useEffect(() => {
        get().then(async (highlighter) => {
            const tokens = await highlighter.codeToThemedTokens(
                code,
                language === "mysql" ? "sql" : language
            );

            setTokens(tokens);
        });
    }, []);

    return (
        <pre className="border">
            {tokens.map((line, i) => (
                <div key={i}>
                    {line.map((token, key) => (
                        <span key={key} style={{ color: token.color }}>
                            {token.content}
                        </span>
                    ))}
                </div>
            ))}
        </pre>
    );
}
