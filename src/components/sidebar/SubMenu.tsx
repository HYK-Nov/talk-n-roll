import {ChevronDownIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {useState} from "react";

interface IProps {
    name: string;
    menu: { link: string, name: string }[];
}

function SubMenu({name, menu}: IProps) {
    const [opened, setOpened] = useState(true);

    return (
        <>
            <div
                className={"hover:bg-slate-700/10 cursor-pointer flex my-3 p-3 rounded-md justify-between items-center"}
                onClick={() => setOpened((prev) => !prev)}>
                <p>{name}</p>
                <ChevronDownIcon className={`h-5 w-5 ${opened && "rotate-180"} transition duration-300`}/>
            </div>
            <ul className={`${!opened && "hidden"}`}>
                {menu.map((value, index) => (
                    <Link href={`/${value.link}`} key={index}>
                        <li className={"hover:bg-slate-700/10 flex my-1 p-3 pl-6 rounded-md"}>
                            <p>{value.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    );
}

export default SubMenu;