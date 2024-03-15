import Link from "next/link";
import {IRoll} from "../../../type/roll.interfaces";

function PostLink({props}: {props:IRoll}) {
    return (
        <li className={"flex py-3 first:pt-0"}>
            <Link href={`/roll/${props.id}`} className={"hover:bg-slate-700/10 hover:rounded-md w-full p-2"}>
                <p className={"text-2xl font-bold pb-2"}>제목</p>
                <div>
                    <span className={"pr-2"}>{props.title}</span>
                    {/*<span>{props.publishedAt.toString()}</span>*/}
                </div>
            </Link>
        </li>
    );
}

export default PostLink;