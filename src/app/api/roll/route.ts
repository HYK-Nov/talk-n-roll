import {sql} from "@vercel/postgres";

export async function GET() {
    const { rows } = await sql`SELECT * FROM Rolls`;

    const res = {
        rolls: [
            {"id": 1, "title": "WTF"},
            {"id": 2, "title": "WTF2"},
        ]
    }
    return Response.json(rows);
}