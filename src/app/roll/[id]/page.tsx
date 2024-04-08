import Link from "next/link";
import {IComment, ICommentDetail, ICommentWrite, IRoll, IRollDetail} from "@/type/roll.interfaces";
import {getComments, getRoll, postComment, postTestComment} from "@/lib/rolls";
import {Button} from "@/components/ui/button";
import "@/styles/texteditor.scss";
import {useForm} from "react-hook-form";
import CommentEditor from "@/components/roll/CommentEditor";
import {unstable_noStore} from "next/cache";
import {sql} from "@vercel/postgres";

interface IProps {
    id: number;
}

export default async function Page({params}: { params: IProps }) {
    unstable_noStore();
    const rollData: IRollDetail[] = await getRoll(params.id);
    const commentData: ICommentDetail[] = await getComments(params.id);

    return (
        <div className={"flex flex-col space-y-4"}>
            <div>
                <Link href={"/roll"} className={"text-xs"}>게시판으로 돌아가기</Link>
            </div>

            <p className={"text-2xl font-bold pb-2"}>{rollData[0].title}</p>
            <p>{rollData[0].content}</p>

            <ul className={"divide-y"}>
                {commentData.map((item, idx) => {
                    if (!item.deleted) {
                        return (
                            <li key={idx}>
                                <p className={"font-bold"}>{item.writer}</p>
                                <p>{item.content}</p>
                            </li>
                        )
                    }
                })}
            </ul>

            {/* 코멘트 작성 */}
            <CommentEditor rollId={params.id}/>
        </div>
    );
}