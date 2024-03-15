import PostLink from "@/components/roll/PostLink";
import Link from "next/link";
import {IRoll} from "../../../type/roll.interfaces";

export default async function Page() {
    const getRows = async () => {
        const res = await fetch(`http://localhost:3000/api/roll`, {next: {revalidate: 3600}});
        return res.json();
    }

    const data: IRoll[] = await getRows();

    console.log(data);

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