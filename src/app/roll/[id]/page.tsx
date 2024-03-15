import Link from "next/link";
import CommentEditor from "@/components/roll/CommentEditor";
import {IRoll} from "@/type/roll.interfaces";
import {getRoll} from "@/services/rolls";

interface IProps {
    id: number;
}

export default async function Page({params}: { params: IProps }) {
    const data: IRoll[] = await getRoll(params.id);
    let comment = "";

    return (
        <div className={"flex flex-col space-y-4"}>
            <div>
                <Link href={"/roll"} className={"text-xs"}>게시판으로 돌아가기</Link>
            </div>

            <p className={"text-2xl font-bold pb-2"}>{data[0].title}</p>
            <p>{data[0].content}</p>

            <form className={"space-y-2"}>
                <CommentEditor rollId={params.id}/>
                <div className={"flex justify-end"}>
                    <button type={"submit"}
                            className={"bg-green-400 hover:bg-green-500 p-2.5 px-5 rounded-md " +
                                "text-sm font-bold text-white dark:text-slate-700"}>
                        코멘트 등록
                    </button>
                </div>
            </form>
        </div>
    );
}