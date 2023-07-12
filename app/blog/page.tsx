import { Nav } from "@/components/nav";
import Image from "next/image";
import Yorushika from "@/public/yorushika.jpg";
import Lori from "@/public/iori-kanzaki.jpg";
import Eve from "@/public/eve.jpg";
import Link from "next/link";
import { getPosts } from "@/lib/sanity";

export default async function Blog() {
    //replaced by pinned banner
    const posts = (await getPosts()).filter(
        (post) => post.slug !== "i-enjoy-music"
    );

    return (
        <main className="container py-10 md:py-28">
            <Nav>
                <h1 className="text-xl sm:text-2xl font-bold">Blog</h1>
            </Nav>
            <p className="text-sm text-muted-foreground">
                My thoughts, articles, and my world.
            </p>
            <div className="mt-8 flex flex-col gap-4">
                <Link
                    href="/blog/i-enjoy-music"
                    className="p-4 mb-8 border border-muted-foreground/30 rounded-lg shadow-xl transition-all hover:bg-white/5 hover:shadow-white/10 sm:p-6"
                >
                    <div className="grid grid-cols-2 grid-rows-2 gap-1 max-h-48 sm:max-h-72 rounded-lg overflow-hidden">
                        <Image
                            alt="yorushika"
                            src={Yorushika}
                            className="object-cover row-start-1 h-full"
                            priority
                        />
                        <Image
                            alt="eve"
                            src={Eve}
                            className="object-cover row-start-2 w-full h-full"
                            priority
                        />
                        <Image
                            alt="kanzaki iori"
                            src={Lori}
                            className="object-cover row-span-2 h-full"
                            priority
                        />
                    </div>
                    <p className="max-sm:text-sm font-medium mt-4 mb-1">
                        I Enjoy Music
                    </p>
                    <p className="text-muted-foreground/70 text-xs sm:text-sm">
                        Share some of my favourite artists and songs.
                    </p>
                </Link>
                {posts.map((post) => (
                    <Link
                        key={post._id}
                        href={`/blog/${post.slug}`}
                        className="p-4 border border-muted-foreground/30 rounded-md transition-colors hover:border-muted-foreground"
                    >
                        <p className="text-xs text-muted-foreground">
                            {new Date(post.publishedAt).toDateString()}
                        </p>
                        <p className="font-medium max-sm:text-sm">
                            {post.title}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
