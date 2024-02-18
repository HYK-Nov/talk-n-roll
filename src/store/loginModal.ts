import {create} from "zustand";

interface ILoginModalState {
    login: boolean,
    setModal: () => void,
}

export const useLoginModalStore = create<ILoginModalState>(set => ({
    login: false,
    setModal: () => set(state => ({login: !state.login})),
}))