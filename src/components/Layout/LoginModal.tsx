import {useLoginModalStore} from "@/store/loginModal";
import {Dialog, Transition} from "@headlessui/react";

function LoginModal() {
    const loginState = useLoginModalStore();

    return (
        <Transition appear show={loginState.login}>
            <Dialog as={"div"} onClose={() => loginState.setModal()} className={"relative z-50"}>
                <Dialog.Panel>
                    <Dialog.Title>Deactivate account</Dialog.Title>
                    <Dialog.Description>
                        This will permanently deactivate your account
                    </Dialog.Description>

                    <p>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>
                </Dialog.Panel>
            </Dialog>
        </Transition>
    );
}

export default LoginModal;