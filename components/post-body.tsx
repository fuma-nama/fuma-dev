import { PortableText } from "@portabletext/react";
import { SpotifyEmbed } from "./spotify-embed";
import { getHighlighter } from "shiki";
import theme from "@/assets/dracula.json";

const highlighter = await getHighlighter({
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
