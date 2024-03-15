import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

interface IProps {
    id: number;
}

export async function GET(request: Request, {params}: { params: IProps }) {
    const {rows} = await sql`SELECT * from Rolls WHERE id=${params.id}`;

    return Response.json(rows);
}