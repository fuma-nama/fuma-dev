import { draftMode } from "next/headers";
import Link from "next/link";

export function PreviewAlert() {
    const preview = draftMode().isEnabled;

    if (preview)
        return (
            <div className="fixed inset-x-4 sm:top-4 max-sm:bottom-4 flex items-center justify-center">
                <div className="flex flex-row gap-4 bg-foreground/10 text-foreground backdrop-blur-xl border px-4 py-2 text-xs rounded-full">
                    <p>You are in preview mode</p>
                    <Link href="/api/preview-exit" className="font-medium">
                        -&gt;
                    </Link>
                </div>
            </div>
        );

    return <></>;
}
