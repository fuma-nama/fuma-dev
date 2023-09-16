import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-t from-white/5 to-50% to-black">
      <div className="container flex flex-col pt-10 md:pt-28">
        <Nav>
          <div className="flex flex-row gap-2 items-start">
            <Image
              alt="me"
              src="/me.jpg"
              width={36}
              height={36}
              className="rounded-full aspect-square max-sm:hidden"
            />
            <div>
              <p className="font-medium">Fuma</p>
              <p className="text-muted-foreground/70 text-xs">A code artist</p>
            </div>
          </div>
        </Nav>
        <svg
          viewBox="0 0 120 25"
          className="max-w-[240px] drop-shadow-[0px_0_1rem_blue] mb-4 mr-32 max-sm:hidden"
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
            Welcome
          </text>
        </svg>

        <p className="text-muted-foreground text-sm">
          Hi, I am a developer living in Hong Kong, passionated on creative
          jobs. I enjoy the process of creating something, anything. Exploring a
          wide spectrum of things is the most valuable experience in my life.
          From a video, article to a website, they are the ways to express a
          feeling or thought.
          <br />
          <br />
          Since secondary school, I have joined some algorithm competitions and
          worked on various open-source projects as a contributor. Currently, I
          am active in certain coding communities, assistance and give advises
          to the beginners, freelance web development & ui design.
          <br />
          <br />
          You can see my{" "}
          <Link
            href="/projects"
            className="text-foreground underline underline-offset-2 transition-colors hover:text-muted-foreground"
          >
            projects
          </Link>{" "}
          and{" "}
          <Link
            href="/blog"
            className="text-foreground underline underline-offset-2 transition-colors hover:text-muted-foreground"
          >
            articles
          </Link>
          , to find something you're interested.
        </p>
        <div className="pt-12 mt-14 border-t border-muted-foreground/30 text-sm flex flex-row gap-4">
          <a
            href="https://github.com/fuma-nama"
            rel="noreferrer noopener"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://discord.gg/QmgmFhg"
            rel="noreferrer noopener"
            target="_blank"
          >
            Discord
          </a>
          <a
            href="https://twitter.com/money_is_shark"
            rel="noreferrer noopener"
            target="_blank"
          >
            Twitter
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <svg viewBox="0 0 720 228" className="w-full mt-auto max-w-7xl mx-auto">
      <g filter="url(#filter0_d_1_4)">
        <path
          d="M41 148.56V224.51H153V217.851C153 203.63 141.471 192.101 127.25 192.101C113.029 192.101 101.5 180.573 101.5 166.351V148.56C101.5 131.853 87.9566 118.31 71.25 118.31C54.5434 118.31 41 131.853 41 148.56Z"
          stroke="url(#linear-gradient-1)"
        />
        <path
          d="M233 103.681V224.51H356V177.953C356 165.941 346.262 156.203 334.25 156.203H325.214C318.192 156.203 312.5 161.895 312.5 168.917V170.131C312.5 176.482 307.351 181.631 301 181.631C294.649 181.631 289.5 176.482 289.5 170.131V103.681C289.5 88.0789 276.852 75.431 261.25 75.431C245.648 75.431 233 88.0789 233 103.681Z"
          stroke="url(#linear-gradient-1)"
        />
        <path
          d="M427.5 200.925V224.51H513V159.873C513 142.426 498.856 128.282 481.409 128.282C471.122 128.282 461.479 133.29 455.564 141.706L438.595 165.846C431.375 176.119 427.5 188.369 427.5 200.925Z"
          stroke="url(#linear-gradient-1)"
        />
        <path
          d="M559.5 71V224.51L663 228V137.317C663 128.747 656.053 121.8 647.483 121.8H629.881C625.805 121.8 622.5 125.105 622.5 129.181C622.5 131.714 620.447 133.766 617.915 133.766H611C604.649 133.766 599.5 128.617 599.5 122.266V71C599.5 59.9543 590.546 51 579.5 51C568.454 51 559.5 59.9543 559.5 71Z"
          stroke="url(#linear-gradient-1)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_4"
          x="-20"
          width="750"
          height="305"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feOffset dx="3" dy="-12" />
          <feGaussianBlur stdDeviation="24" />
          <feBlend mode="normal" in="SourceGraphic" result="shape" />
        </filter>
        <linearGradient
          id="linear-gradient-1"
          x1="352"
          y1="51"
          x2="352"
          y2="228"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
