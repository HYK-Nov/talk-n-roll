import {sql} from "@vercel/postgres";
import {IComment} from "@/type/roll.interfaces";

export async function POST(comment: IComment){
    try {
        if (!comment.roll_id || !comment.content || !comment.writer) throw new Error('Comment data required');
        await sql`INSERT INTO Comments VALUES(DEFAULT, ${comment.roll_id}, '${comment.writer}', '${comment.content}', NOW(), NOW(), DEFAULT)`;
    } catch (e) {
        console.error(e);
    }
}