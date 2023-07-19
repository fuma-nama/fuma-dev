import { PortableText } from "@portabletext/react";
import { SpotifyEmbed } from "./spotify-embed";
import { getHighlighter, setCDN } from "shiki";

if (typeof window !== "undefined") {
    // load from cdn if it's in client component
    setCDN("https://unpkg.com/shiki");
}

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

async function CodeBlock({
    language = "text",
    code,
    ...props
}: {
    language?: string;
    code: string;
}) {
    const tokens = (await highlighter).codeToThemedTokens(
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
