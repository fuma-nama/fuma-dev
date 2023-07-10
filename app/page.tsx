import Image from "next/image";

export default function Home() {
    return (
        <main className="container py-32">
            <div className="w-full flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                    <Image
                        alt="me"
                        src="/me.jpg"
                        width={44}
                        height={44}
                        className="rounded-full aspect-square"
                    />
                    <div>
                        <p className="font-medium text-lg">Money</p>
                        <p className="text-muted-foreground/70 text-sm">
                            I am a...
                        </p>
                    </div>
                </div>
                <svg
                    viewBox="0 0 120 25"
                    className="max-w-xs drop-shadow-[0px_0_1rem_blue] mt-4 mb-4"
                >
                    <text
                        x="0"
                        y="20"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeDasharray="10"
                        strokeLinecap="round"
                        className="animate-text-dash"
                        fill="rgba(255,255,255,0.4)"
                    >
                        Web Developer
                    </text>
                </svg>
            </div>

            <p className="text-muted-foreground text-sm">
                Hi, I am a developer living in Hong Kong, passionated on
                creative jobs. I enjoy the process of creating something,
                anything. I've been a UI Designer as well as a Web Developer.
                While coding is my hobby, I love drawing my ideas on a paper
                too. <br />
                <br />
                Exploring a wide spectrum of things is the most valuable
                experience in my life. From a video, article to a website, they
                are the ways to express a feeling or thought. <br />
                <br />
                Since secondary school, I have joined some algorithm
                competitions and worked on various open-source projects as a
                contributor. Currently, I am active in certain coding
                communities, assistance and give advises to the beginners,
                freelance web development & ui design.
                <br />
                <br />
                You see my projects and articles, find something you're
                interested.
            </p>
        </main>
    );
}
