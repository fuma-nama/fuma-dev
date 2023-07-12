import { Post } from "@/lib/sanity";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.SANITY_REVALIDATE_SECRET!;

export async function POST(req: NextRequest) {
    const signature = req.headers.get(SIGNATURE_HEADER_NAME);
    const body = await req.text();

    if (signature == null || !isValidSignature(body, signature, secret)) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid signature",
            },
            {
                status: 401,
            }
        );
    }

    const post: Post = JSON.parse(body);

    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);

    return NextResponse.json({
        success: true,
    });
}
