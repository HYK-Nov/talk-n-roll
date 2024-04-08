'use client'
import Link from "next/link";
import {useLoginModalStore} from "@/store/loginModal";
import LoginModal from "@/components/Layout/LoginModal";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";

function Header() {
    const loginModalState = useLoginModalStore();

    return (
        <header className={"fixed top-0 left-0 w-full z-50 border-b px-3 bg-white dark:bg-slate-700"}>
            <div className={"h-14 flex container justify-between items-center"}>
                <Link href={"/"} className={"font-black text-xl"}>TALK N ROLL</Link>
                <LoginModal/>

                {/* 로그인 버튼 */}
                <Dialog>
                    <DialogTrigger>
                        <Button variant={"secondary"}>로그인</Button>
                    </DialogTrigger>
                    <DialogContent className={"max-w-[425px]"}>
                        <DialogHeader></DialogHeader>
                        <Input placeholder={"이메일"}/>
                        <Input placeholder={"비밀번호"}/>
                        <Button>로그인</Button>
                    </DialogContent>
                </Dialog>

            </div>
        </header>
    );
}

export default Header;