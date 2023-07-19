import { PortableText } from "@portabletext/react";
import { SpotifyEmbed } from "./spotify-embed";

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
    return <pre className="border">{code}</pre>;
}
