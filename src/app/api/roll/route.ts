import {sql} from "@vercel/postgres";

export async function GET() {
    const { rows } = await sql`SELECT * from Rolls`;

    return Response.json(rows);
}