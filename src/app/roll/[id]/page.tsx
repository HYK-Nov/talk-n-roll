"use client";
import Link from "next/link";
import TextEditor from "@/components/roll/TextEditor";
import {useState} from "react";

interface IProps {
    id: number;
}

function Page({params}: { params: IProps }) {
    const [comment, setComment] = useState("");

    return (
        <div className={"flex flex-col space-y-4"}>
            <div>
                <Link href={"/roll"} className={"text-xs"}>게시판으로 돌아가기</Link>
            </div>

            <p className={"text-2xl font-bold pb-2"}>제목</p>
            <p>Post: {params.id}</p>

            <form className={"space-y-2"}>
                <TextEditor setValue={setComment}/>
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