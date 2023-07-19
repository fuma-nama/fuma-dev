import { PortableText } from "@portabletext/react";
import { SpotifyEmbed } from "./spotify-embed";
import { Highlight, themes, Prism } from "prism-react-renderer";

if (Prism != null) {
    global.Prism = Prism;
    import("prismjs/components/prism-json" as any);
}

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

function CodeBlock({
    language = "text",
    code,
}: {
    language?: string;
    code: string;
}) {
    return (
        <Highlight
            theme={themes.nightOwl}
            code={code}
            language={language === "mysql" ? "sql" : language}
        >
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}
