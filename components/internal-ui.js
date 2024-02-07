"use client"

import {useState, useEffect} from "react";
import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent} from "@/components/ui/context-menu";
import {StackToolbar} from "@/components/stack-toolbar";
import { useDesignStore } from "@/store";
import {cn} from "@/lib/utils";
import {TOOLS} from "@/constants/tools";

export function InternalUI() {
    const { currentTool, setCurrentTool } = useDesignStore();
    const [isGrabbing, setIsGrabbing] = useState(false);

    useEffect(() => {
        window.addEventListener("keydown", function (e) {
            if(e.code === "Space") {
                setCurrentTool(TOOLS.GRAB)
                console.log(currentTool)
            }
        })

        window.addEventListener("keyup", function (e) {
            if(e.code === "Space") {
                setCurrentTool(TOOLS.MOVE)
            }
        })

        return () => {
            window.removeEventListener("keydown", function (){})
            window.removeEventListener("keyup", function (){})
        }
    }, [])

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger asChild>
                    <canvas
                        onMouseDown={() => setIsGrabbing(true)}
                        onMouseUp={() => setIsGrabbing(false)}
                        className={cn("w-full h-full bg-zinc-100 cursor-move", {
                        "cursor-grab": !isGrabbing && currentTool === TOOLS.GRAB,
                        "cursor-grabbing": isGrabbing  && currentTool === TOOLS.GRAB
                    })}/>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-fit rounded-xl shadow-lg border-none">
                    <ContextMenuSub className="justify-between space-x-2">
                        <ContextMenuSubTrigger>
                            <span className="text-xs">New</span>
                            <span className="text-xs"></span>
                        </ContextMenuSubTrigger>
                        <ContextMenuSubContent>
                            <ContextMenuItem className="justify-between space-x-2">
                                <span className="text-xs">Rectangle</span>
                                <span className="text-xs">R</span>
                            </ContextMenuItem>
                            <ContextMenuItem className="justify-between space-x-2">
                                <span className="text-xs">Line</span>
                                <span className="text-xs">L</span>
                            </ContextMenuItem>
                            <ContextMenuItem className="justify-between space-x-2">
                                <span className="text-xs">Ellipse</span>
                                <span className="text-xs">O</span>
                            </ContextMenuItem>
                            <ContextMenuItem className="justify-between space-x-2">
                                <span className="text-xs">Polygon</span>
                                <span className="text-xs"></span>
                            </ContextMenuItem>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuItem className="justify-between space-x-2">
                        <span className="text-xs">Copy</span>
                        <span className="text-xs">Ctrl+C</span>
                    </ContextMenuItem>
                    <ContextMenuItem className="justify-between space-x-2">
                        <span className="text-xs">Paste</span>
                        <span className="text-xs">Ctrl+V</span>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem className="justify-between space-x-2">
                        <span className="text-xs">Zoom to 100%</span>
                        <span className="text-xs">Shift+0</span>
                    </ContextMenuItem>
                    <ContextMenuItem className="justify-between space-x-2">
                        <span className="text-xs">Zoom to Fit</span>
                        <span className="text-xs">Shift+1</span>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem className="justify-between space-x-2">
                        <span className="text-xs">Delete</span>
                        <span className="text-xs">Del</span>
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
            <StackToolbar/>
        </>
    )
}