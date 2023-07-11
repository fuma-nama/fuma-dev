"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row gap-x-8 gap-y-2 flex-wrap items-start justify-between mb-8">
            {children}
            <div className="flex flex-row items-center gap-4">
                <Item href="/">About</Item>
                <Item href="/projects">Projects</Item>
                <Item href="/blog">Blog</Item>
            </div>
        </div>
    );
}

function Item({ href, children }: { href: string; children: string }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={clsx(
                "text-sm transition-colors",
                href === pathname
                    ? "text-foreground underline underline-offset-4"
                    : "text-muted-foreground hover:text-foreground"
            )}
        >
            {children}
        </Link>
    );
}
