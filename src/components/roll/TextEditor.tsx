import {useEffect, useState} from "react";
import "../../style/texteditor.scss";

interface IProps {
    setValue: (value: string) => void;
}

function TextEditor({setValue}: IProps) {
    const MAX_LENGTH = 1000;
    const [comment, setComment] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        setValue(comment);
    }, [comment, setValue]);

    return (
        <div className={`border ${isFocus ? "border-green-400" : "border-slate-700/20"} w-full rounded-md p-4 text-sm`}>
            <textarea spellCheck={"false"} className={`w-full h-28 outline-0 mb-1 ${isFocus && "focus"}`}
                      maxLength={MAX_LENGTH}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={(e) => setComment(e.target.value)}/>
            <div
                className={`flex justify-end ${isFocus ? "text-green-400" : "text-slate-700/20"} font-bold`}>{comment.length}/{MAX_LENGTH}</div>
        </div>
    );
}

export default TextEditor;