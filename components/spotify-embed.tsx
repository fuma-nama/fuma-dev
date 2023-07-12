type ValueProps = { track: string };

export function SpotifyEmbed(props: any) {
    const track = (props.value as ValueProps).track;

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
