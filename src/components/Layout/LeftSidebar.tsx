'use client'
import {useLoginModalStore} from "@/store/loginModal";
import style from "../../style/sidebar.module.scss"
import Link from "next/link";

const categories = [
    {link: "test", name: "test"},
    {link: "roll", name: "roll"}
];

function LeftSidebar() {
    const loginState = useLoginModalStore();

    console.log(loginState.login);

    return (
        <div className={`border-r ${style.sidebar}`}>
            <ul>
                {categories.map((value, index) => (
                    <Link href={`/${value.link}`} key={index}>
                        <li className={"bg-amber-300 flex my-3 p-3 rounded-md"}>
                            <p>{value.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default LeftSidebar;