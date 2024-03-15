import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

interface IProps {
    id: number;
}

export async function GET(request: Request, {params}: { params: IProps }) {
    return NextResponse.json({ hello: "Next.js" });
}