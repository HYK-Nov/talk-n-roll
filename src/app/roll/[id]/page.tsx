import Link from "next/link";
import CommentEditor from "@/components/roll/CommentEditor";

interface IProps {
    id: number;
}

export default async function Page({params}: { params: IProps}) {
    const getRolls = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/roll`);
        return res.json();
    }
    const data = await getRolls();

    console.log(data);

    let comment = "";

    return (
        <div className={"flex flex-col space-y-4"}>
            <div>
                <Link href={"/roll"} className={"text-xs"}>게시판으로 돌아가기</Link>
            </div>

            <p className={"text-2xl font-bold pb-2"}>제목</p>
            <p>Post: {params.id}</p>

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