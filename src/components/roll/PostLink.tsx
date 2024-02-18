import Link from "next/link";

function PostLink({id}: { id: number }) {
    return (
        <li className={"flex py-3 first:pt-0"}>
            <Link href={`/roll/${id}`} className={"hover:bg-slate-700/10 hover:rounded-md w-full p-2"}>
                <p className={"text-2xl font-bold pb-2"}>제목</p>
                <div>
                    <span className={"pr-2"}>주제(카테고리)</span>
                    <span>날짜</span>
                </div>
            </Link>
        </li>
    );
}

export default PostLink;