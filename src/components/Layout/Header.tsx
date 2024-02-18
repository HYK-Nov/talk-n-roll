'use client'
import Link from "next/link";
import {useLoginModalStore} from "@/store/loginModal";
import LoginModal from "@/components/Layout/LoginModal";

function Header() {
    const loginModalState = useLoginModalStore();

    return (
        <header className={"fixed top-0 left-0 h-14 w-full z-50 border-b px-3 bg-white dark:bg-slate-700"}>
            <div className={"flex container justify-between"}>
                <Link href={"/"} className={"font-black text-xl"}>LOGO</Link>
                <LoginModal/>

                {/* 로그인 버튼 */}
                <button type={"button"}
                        // onClick={() => loginModalState.setModal()}
                        className={"bg-green-400 hover:bg-green-500 rounded-full px-3 py-2 text-white dark:text-slate-700"}>
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;