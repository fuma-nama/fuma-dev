import { Nav } from "@/components/nav";

export default function Projects() {
  return (
    <main className="container py-10 md:py-28">
      <Nav>
        <h1 className="text-xl sm:text-2xl font-bold">Projects</h1>
      </Nav>
      <p className="text-sm text-muted-foreground">
        Frameworks, Libraries, Web apps, I build things with high-quality.
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <Card href="https://shark-chat.vercel.app" title="Shark Chat">
          A modern chat app written in Typescript and built with Next.js.
        </Card>
        <Card href="https://next-docs-zeta.vercel.app" title="Next Docs">
          The powerful framework to build content-based Next.js websites.
        </Card>
        <Card
          href="https://github.com/SonMooSans/discord-fp"
          title="Discord FP"
        >
          A Beautiful Application Command Library for Discord.js and Discordeno.
        </Card>
      </div>
      <h2 className="text-lg sm:text-xl font-bold mt-12 mb-2">My Toys</h2>
      <p className="text-sm text-muted-foreground">Small projects for fun.</p>
      <div className="flex flex-col gap-4 mt-8">
        <Card href="https://simple-game-pi.vercel.app" title="Simple Game">
          A funny game for consuming your free time.
        </Card>

        <Card href="https://nodeploy-neon.vercel.app" title="No Deploy">
          Not to Deploy. Nothing to Worry.
        </Card>

        <Card
          href="https://github.com/SonMooSans/nodeploy-cli"
          title="No Deploy CLI"
        >
          A fake Rust CLI tool made for No Deploy.
        </Card>
      </div>
      <h2 className="text-lg sm:text-xl font-bold mt-12 mb-2">Experimental</h2>
      <p className="text-sm text-muted-foreground">
        Unstable projects built for fun or experiment, with bleeding edge
        technologies.
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <Card
          href="https://money-shark.vercel.app"
          title="Discord Bot Template"
        >
          A discord bot template with dashboard & documentation using Next.js
          App Router.
        </Card>
      </div>

      <h2 className="text-lg sm:text-xl font-bold mt-12 mb-2">Legacy</h2>
      <p className="text-sm text-muted-foreground">
        My old and abandoned projects.
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <Card href="https://money-portfolio.vercel.app" title="Old Portfolio">
          My deprecated well-styled portfoilo which is outdated.
        </Card>
        <Card href="https://github.com/SonMooSans/jdak" title="JDAK">
          Light Command framework for JDA written in Kotlin.
        </Card>
        <Card href="https://github.com/SonMooSans/omagize" title="Omagize">
          The Chat App with a lot of features, written in Java and Typescript.
        </Card>
      </div>
    </main>
  );
}

function Card({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="border border-muted-foreground/30 rounded-md p-4 transition-colors hover:border-muted-foreground"
      rel="noreferrer noopener"
    >
      <h3 className="text-sm sm:text-base font-medium mb-1">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground">{children}</p>
    </a>
  );
}
