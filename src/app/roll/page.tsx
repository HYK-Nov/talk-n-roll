import PostLink from "@/components/roll/PostLink";

function Page() {

    return (
        <ul className={"divide-y"}>
            {
                [...Array(10)].map((_, idx) => (
                    <PostLink id={idx+1} key={idx}/>
                ))
            }
        </ul>
    );
}

export default Page;