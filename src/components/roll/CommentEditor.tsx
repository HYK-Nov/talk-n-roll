'use client'
import {useState} from "react";
import "@/styles/texteditor.scss";
import {useForm} from "react-hook-form";
import {ICommentWrite} from "@/type/roll.interfaces";
import {postComment} from "@/lib/rolls";
import {Button} from "@/components/ui/button";

interface IProps {
    rollId: number;
}

function CommentEditor({rollId}: IProps) {
    const MAX_LENGTH = 3000;
    const [commentFocused, setCommentFocused] = useState(false);
    const [nameFocused, setNameFocused] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: {errors}
    } = useForm<ICommentWrite>();

    const onSubmit = async (data: ICommentWrite) => {
        if (!data.writer || !data.content) {
            alert("다시 확인해주세요");
            return;
        }

        postComment({roll_id: rollId, ...data})
            .then((res) => console.log(res))
            .catch((e) => {
                console.error(e);
                alert("실패했습니다");
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"border w-full rounded-md px-4 py-5 text-sm grid grid-cols-1 space-y-3"}>
                <div className={"flex space-x-3 justify-between"}>
                    <input defaultValue={"익명"}
                           maxLength={30}
                           {...register("writer", {required: true, maxLength: 30})}
                           className={"outline-0 font-bold grow"}/>
                    <p>{watch("content") ? watch("content").length : 0} / 3000</p>
                </div>
                <textarea spellCheck={"false"}
                          maxLength={3000}
                          {...register("content", {required: true, maxLength: 3000})}
                          className={"outline-0"}/>

                <div className={"flex justify-end"}>
                    <Button type={"submit"}>등록</Button>
                </div>
            </div>
        </form>
    );
}

export default CommentEditor;