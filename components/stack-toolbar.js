"use client"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuGroup,
    DropdownMenuShortcut,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";
import {
    CursorIcon,
    GrabIcon,
    RulerIcon,
    ArrowDownIcon,
    ShapesIcon,
    TypoIcon,
    ImageIcon, RectangleLineIcon, LineIcon, CircleIcon, TrianglesIcon, PenIcon,
} from "@/components/icons";
import { useDesignStore } from "@/store";
import { TOOLS } from "@/constants/tools"
import {cn} from "@/lib/utils";

export function StackToolbar() {
    const { currentTool, setCurrentTool } = useDesignStore()
    return (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-5 p-2.5 rounded-2xl shadow-xl bg-white z-0">
            <div className="flex space-x-2.5 select-none">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className={cn("px-1 w-8 h-8", {
                            "bg-muted": currentTool === TOOLS.MOVE
                        })} onClick={() => setCurrentTool(TOOLS.MOVE)}>
                            <CursorIcon className={cn("w-5 h-5 fill-muted-foreground", { "fill-zinc-800": currentTool === TOOLS.MOVE })}/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Move</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className={cn("px-1 w-8 h-8", {
                            "bg-muted": currentTool === TOOLS.GRAB
                        })} onClick={() => setCurrentTool(TOOLS.GRAB)}>
                            <GrabIcon viewBox="0 0 24 24" className={cn("w-5 h-5 fill-muted-foreground", { "fill-zinc-800": currentTool === TOOLS.GRAB })}/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Grab</p>
                    </TooltipContent>
                </Tooltip>
                <DropdownMenu>
                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuTrigger asChild>
                                <div
                                    className={cn("flex items-center rounded-lg px-2 h-8 space-x-1 hover:bg-muted cursor-pointer", {
                                        "bg-muted": [TOOLS.RRECT, TOOLS.LINE, TOOLS.ELLIPSE, TOOLS.POLYGON].includes(currentTool)
                                    })}>
                                    <ToolShapeIcon shape={currentTool} className={cn("w-5 h-5 fill-muted-foreground", { "fill-zinc-800": [TOOLS.RRECT, TOOLS.LINE, TOOLS.ELLIPSE, TOOLS.POLYGON].includes(currentTool) })}/>
                                    <ArrowDownIcon className="w-3 h-3 fill-muted-foreground"/>
                                </div>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Shapes tools</p>
                        </TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent sideOffset={8} className="w-fit rounded-xl p-1.5 shadow-xl border-none">
                        <DropdownMenuGroup>
                            <DropdownMenuItem className={cn("flex justify-between space-x-4 rounded-lg", { "bg-muted": currentTool === TOOLS.RRECT })}>
                                <div className="flex items-center space-x-1"  onClick={() => setCurrentTool(TOOLS.RRECT)}>
                                    <RectangleLineIcon className="w-4 h-4 fill-muted-foreground"/>
                                    <span className="text-xs font-normal">Rectangle</span>
                                </div>
                                <DropdownMenuShortcut>R</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className={cn("flex justify-between space-x-4 rounded-lg", { "bg-muted": currentTool === TOOLS.LINE })}>
                                <div className="flex items-center space-x-1" onClick={() => setCurrentTool(TOOLS.LINE)}>
                                    <LineIcon className="w-4 h-4 fill-muted-foreground"/>
                                    <span className="text-xs font-normal">Line</span>
                                </div>
                                <DropdownMenuShortcut>L</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className={cn("flex justify-between space-x-4 rounded-lg", { "bg-muted": currentTool === TOOLS.ELLIPSE })}>
                                <div className="flex items-center space-x-1" onClick={() => setCurrentTool(TOOLS.ELLIPSE)}>
                                    <CircleIcon className="w-4 h-4 fill-muted-foreground"/>
                                    <span className="text-xs font-normal">Ellipse</span>
                                </div>
                                <DropdownMenuShortcut>O</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className={cn("flex justify-between space-x-4 rounded-lg", { "bg-muted": currentTool === TOOLS.POLYGON })}>
                                <div className="flex items-center space-x-1" onClick={() => setCurrentTool(TOOLS.POLYGON)}>
                                    <TrianglesIcon className="w-4 h-4 fill-muted-foreground"/>
                                    <span className="text-xs font-normal">Polygon</span>
                                </div>
                                <DropdownMenuShortcut></DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className={cn("px-1 w-8 h-8", { "bg-muted": currentTool === TOOLS.PEN })} onClick={() => setCurrentTool(TOOLS.PEN)}>
                            <PenIcon className={cn("w-5 h-5 fill-muted-foreground", { "fill-zinc-800": currentTool === TOOLS.PEN })}/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Pen</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="px-1 w-8 h-8" onClick={() => setCurrentTool(TOOLS.TEXT)}>
                            <TypoIcon className={cn("w-5 h-5 fill-muted-foreground", { "fill-zinc-800": currentTool === TOOLS.TEXT })}/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Text</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="px-1 w-8 h-8" onClick={() => setCurrentTool(TOOLS.IMAGE)}>
                            <ImageIcon className={cn("w-5 h-5 fill-muted-foreground", { "fill-zinc-800": currentTool === TOOLS.IMAGE })}/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Image</p>
                    </TooltipContent>
                </Tooltip>
                <DropdownMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <DropdownMenuTrigger asChild>
                                <div
                                    className="flex items-center rounded-lg px-2 h-8 space-x-1 hover:bg-muted cursor-pointer">
                                    <RulerIcon viewBox="0 0 24 24" className="w-5 h-5 fill-muted-foreground"/>
                                    <ArrowDownIcon className="w-3 h-3 fill-muted-foreground"/>
                                </div>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Ruler tools</p>
                        </TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent className="w-fit rounded-xl p-1.5 shadow-xl border-none">
                        <DropdownMenuGroup>
                            <DropdownMenuCheckboxItem checked>
                                <span className="text-xs">Snap to geometry</span>
                                <DropdownMenuShortcut className="pl-4 text-xs"></DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked>
                                <span className="text-xs">Snap to object</span>
                                <DropdownMenuShortcut className="pl-4 text-xs"></DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked>
                                <span className="text-xs">Snap to pixel grid</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Ctrl + Shift
                                    + &#39;</DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuCheckboxItem>
                                <span className="text-xs">Pixel grid</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Shift + &#39;</DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                <span className="text-xs">Rulers</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Shift + R</DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuTrigger asChild>
                                <div
                                    className="flex space-x-1 justify-between items-center px-2 w-16 h-full rounded-lg bg-muted cursor-pointer select-none">
                                    <span className="fill-zinc-800 text-xs font-bold select-none">50%</span>
                                    <ArrowDownIcon className="w-3 h-3 fill-muted-foreground"/>
                                </div>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Zoom</p>
                        </TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent className="w-fit rounded-xl p-1.5 shadow-xl border-none">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <span className="text-xs">Zoom</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Z</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span className="text-xs">Zoom In</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Ctrl + =</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span className="text-xs">Zoom Out</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Ctrl + -</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <span className="text-xs">Zoom to 100%</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Shift + 0</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span className="text-xs">Zoom to Fit</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Shift + 1</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                <span className="text-xs">Zoom to Selection</span>
                                <DropdownMenuShortcut className="pl-4 text-xs">Shift + 3</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

const ToolShapeIcon = ({shape, ...props}) => {
    switch (shape) {
        case TOOLS.RRECT:
            return <RectangleLineIcon {...props} />
        case TOOLS.LINE:
            return <LineIcon {...props} />
        case TOOLS.ELLIPSE:
            return <CircleIcon {...props} />
        case TOOLS.POLYGON:
            return <TrianglesIcon {...props} />
        default:
            return <ShapesIcon {...props} />
    }
}