import {sql} from "@vercel/postgres";

export const getRolls = async () => {
    const { rows } = await sql`SELECT * from Rolls`;

    return Response.json(rows).json();
}

export const getRoll = async (id: number) => {
    const {rows} = await sql`SELECT * from Rolls WHERE id=${id}`;
    return Response.json(rows).json();
}