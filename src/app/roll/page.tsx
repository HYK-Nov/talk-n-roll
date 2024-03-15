import PostLink from "@/components/roll/PostLink";
import Link from "next/link";

function Page() {

    return (
        <main>
            <div className={"flex justify-end"}>
                <Link href={"/write"}>
                    <p>작성하기</p>
                </Link>
            </div>

            <ul className={"divide-y"}>
                {
                    [...Array(10)].map((_, idx) => (
                        <PostLink id={idx + 1} key={idx}/>
                    ))
                }
            </ul>
        </main>
    );
}

export default Page;