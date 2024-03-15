import Link from "next/link";
import CommentEditor from "@/components/roll/CommentEditor";
import {IRoll} from "../../../../type/roll.interfaces";

interface IProps {
    id: number;
}

export default async function Page({params}: { params: IProps }) {
    const getRoll = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/roll/${params.id}`, {next: {revalidate: 3600}});
        return res.json();
    }

    const data: IRoll[] = await getRoll();
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