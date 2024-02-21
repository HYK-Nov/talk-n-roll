'use client'
import {useLoginModalStore} from "@/store/loginModal";
import "../../style/sidebar.scss";
import SubMenu from "@/components/sidebar/SubMenu";

const topic = [
    {link: "test", name: "test"},
    {link: "roll", name: "roll"}
];

function LeftSidebar() {
    const loginState = useLoginModalStore();

    return (
        <nav className={"sidebar border-r"}>
            <SubMenu name={"주제"} menu={topic}/>
        </nav>
    );
}

export default LeftSidebar;