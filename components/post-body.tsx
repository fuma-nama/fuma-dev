import { PortableText } from "@portabletext/react";
import { SpotifyEmbed } from "./spotify-embed";

export function PostBody({ value }: { value: any }) {
    return (
        <PortableText
            value={value}
            components={{
                types: {
                    "spotify-embed": SpotifyEmbed,
                },
            }}
        />
    );
}
