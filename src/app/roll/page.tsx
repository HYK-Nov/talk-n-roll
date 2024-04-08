import PostLink from "@/components/roll/PostLink";
import Link from "next/link";
import {IRoll} from "@/type/roll.interfaces";
import {getRolls} from "@/lib/rolls";

export default async function Page() {
    const data: IRoll[] = await getRolls();

    return (
        <main>
            <div className={"flex justify-end"}>
                <Link href={"/write"}>
                    <p>작성하기</p>
                </Link>
            </div>

            <ul className={"divide-y"}>
                {
                    data.map((item, idx) => (<PostLink props={item} key={idx}/>))
                }
            </ul>
        </main>
    );
}