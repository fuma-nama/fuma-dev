import { PortableText } from "@portabletext/react";
import { SpotifyEmbed } from "./spotify-embed";
import { getHighlighter } from "shiki";
import theme from "@/assets/dracula.json";
import json from "@/assets/languages/json.tmLanguage.json";
import sql from "@/assets/languages/sql.tmLanguage.json";

const highlighter = await getHighlighter({
    langs: [
        { id: "sql", ...sql, grammar: sql },
        { id: "json", ...json, grammar: json },
    ] as any,
    theme: theme as any,
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

async function CodeBlock({
    language = "text",
    code,
}: {
    language?: string;
    code: string;
}) {
    const tokens = highlighter.codeToThemedTokens(
        code,
        language === "mysql" ? "sql" : language
    );

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
