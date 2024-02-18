import Link from "next/link";

function Page({params}: { params: { id: number } }) {
    return (
        <div className={"flex flex-col space-y-4"}>
            <div>
                <Link href={"/roll"} className={"text-xs"}>게시판으로 돌아가기</Link>
            </div>

            <p className={"text-2xl font-bold pb-2"}>제목</p>
            <p>Post: {params.id}</p>

            <form>
                <textarea spellCheck={"false"}
                          className={"border outline-green-400 w-full rounded-md p-4 h-36 text-sm"}/>
                <div className={"flex justify-end"}>
                    <button type={"submit"}
                            className={"bg-green-400 hover:bg-green-500 p-2.5 rounded-md " +
                                "text-sm font-bold text-white dark:text-slate-700"}>
                        코멘트 등록
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Page;