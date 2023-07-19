"use client";
import { PortableText } from "@portabletext/react";
import { SpotifyEmbed } from "@/components/spotify-embed";
import { IThemedToken, getHighlighter, setCDN } from "shiki";
import { useEffect, useState } from "react";

setCDN("https://unpkg.com/shiki");
const highlighter = getHighlighter({
    langs: ["json", "sql", "javascript", "typescript"],
    theme: "dracula",
});

export function PostBody({ value }: { value: any }) {
    return (
        <PortableText
            value={value}
            components={{
                types: {
                    code: (props) => <CodeBlock {...props.value} />,
                    "spotify-embed": SpotifyEmbed,
                },
            }}
        />
    );
}

const tokenize = async (code: string, language: string) => {
    return (await highlighter).codeToThemedTokens(
        code,
        language === "mysql" ? "sql" : language
    );
};

function CodeBlock({
    language = "text",
    code,
}: {
    language?: string;
    code: string;
}) {
    const [tokens, setTokens] = useState<IThemedToken[][]>([]);

    useEffect(() => {
        tokenize(code, language).then((res) => setTokens(res));
    }, [code, language]);

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
