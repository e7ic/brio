import {create} from "zustand";
import localforage from "localforage";
import {debounce} from "@/lib/utils";

export const useDesignStore = create((set) => ({
    basic: {},
    currentId: null,
    setCurrentId: (id) => set({ currentId: id }),
    init: async () => {
        localforage.getItem("design").then(res => {
            console.log(res)
            set({basic: res})
        }).catch(err => {
            console.error("Err:", err)
        })
    },
    update: async (payload) => {
        debounce(function () {
            localforage.setItem("design", payload ?? {}).catch(err => {
                console.error("Err:", err)
            })
        }, 100)()
        set({basic: payload})
    },
    clear: async () => {
        localforage.removeItem("design").catch(err => {
            console.error("Err:", err)
        })
    }
}))