"use client";
import CommentEditor from "@/components/roll/CommentEditor";
import {useState} from "react";
import {useRouter} from "next/navigation";

const category = [
    {id: 1, name: "roll"},
    {id: 2, name: "test"},
]

function Page() {
    const router = useRouter();
    const [selectCategory, setSelectCategory] = useState(category[0]);
    const [comment, setComment] = useState("");

    return (
        <main className={"flex flex-col space-y-3"}>
            {/* 카테고리 선택 */}

            <div onClick={() => router.back()} className={"text-xs cursor-pointer"}>돌아가기</div>

            <input className={"w-full border border-slate-700/20 outline-1 outline-green-400 rounded-md p-2 text-sm"}
                   placeholder={"제목"}/>
            {/*<CommentEditor setValue={setComment}/>*/}

            <div className={"flex justify-end"}>
                <button type={"submit"}
                        className={"bg-green-400 hover:bg-green-500 p-2.5 px-5 rounded-md " +
                            "text-sm font-bold text-white dark:text-slate-700"}>
                    등록하기
                </button>
            </div>
        </main>
    );
}

export default Page;