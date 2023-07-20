import { PortableTextComponentProps } from "@portabletext/react";

export function SpotifyEmbed(
    props: PortableTextComponentProps<{ track: string }>
) {
    const track = props.value.track;

    return (
        <iframe
            className="rounded-md"
            src={`https://open.spotify.com/embed/track/${track}?utm_source=generator&theme=0`}
            width="100%"
            height="100"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    );
}
