import {create} from "zustand";
import localforage from "localforage";
import {debounce} from "@/lib/utils";
import { TOOLS } from "@/constants/tools"

export const useDesignStore = create((set) => ({
    basic: {},
    currentId: null,
    currentTool: TOOLS.MOVE,
    setCurrentId: (id) => set({ currentId: id }),
    setCurrentTool: (tool) => set({ currentTool: tool }),
    init: async () => {
        localforage.getItem("design").then(res => {
            set({basic: res ?? {}})
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