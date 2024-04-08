import {createClient, sql} from "@vercel/postgres";
import {IComment} from "@/type/roll.interfaces";

export const getRolls = async () => {
    try {
        const {rows} = await sql`SELECT roll_id, title, category from Rolls`;
        return Response.json(rows).json();
    }catch (e) {
        return Response.json(e).json();
    }
}

export const getRoll = async (id: number) => {
    try {
        const {rows} = await sql`SELECT * from Rolls WHERE roll_id = ${id}`;
        return Response.json(rows).json();
    }catch (e) {
        return Response.json(e).json();
    }
}

export const getComments = async (rollId: number) => {
    try {
        const {rows} = await sql`SELECT * from Comments WHERE roll_id = ${rollId}`;
        return Response.json(rows).json();
    }catch (e) {
        return Response.json(e).json();
    }
}

export const postComment = async (comment: IComment) => {
    try {
        if (!comment.roll_id || !comment.content || !comment.writer) throw new Error('Comment data required');
        // await sql`INSERT INTO Comments VALUES(DEFAULT, ${comment.roll_id}, ${comment.writer}, ${comment.content}, NOW(), NOW(), DEFAULT)`;
        await sql`INSERT INTO Comments VALUES(DEFAULT, 1, test, test2, NOW(), NOW(), DEFAULT)`;
    } catch (e) {
        console.error(e);
    }
}

export const postTestComment = async () => {
    try {
        await sql`INSERT INTO Comments VALUES(DEFAULT, 1, test, test2, NOW(), NOW(), DEFAULT)`;
    } catch (e) {
        console.error(e);
    }
}