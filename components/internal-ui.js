"use client"

import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent} from "@/components/ui/context-menu";
import {StackToolbar} from "@/components/stack-toolbar";

export function InternalUI() {
    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger asChild>
                    <canvas className="w-full h-full bg-zinc-100"></canvas>
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