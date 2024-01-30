"use client"

import { useRef } from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {AddPlusIcon, EyeIcon, ImageIcon, TextIcon, TrianglesIcon, UnlockIcon} from "@/components/icons";
import { useDraggable } from "@/hooks/use-draggable";

export function MotionPanel() {
    const [width, startDrag] = useDraggable(288, 224, 448);
    const resizableRef = useRef(null);

    const handleMouseDown = (e) => {
        const startRect = resizableRef.current.getBoundingClientRect();
        startDrag(e.clientX, startRect.width);
    };

    return (
        <div className="relative flex flex-col w-1/2 h-full bg-white z-10 pointer-events-auto" style={{
            maxWidth: `${width}px`
        }} ref={resizableRef}>
            <div className="flex items-center justify-between pt-4 px-4 select-none">
                <strong className="pb-2 text-sm">Layers</strong>
            </div>
            <div className="w-full h-full pb-4 overflow-y-auto">
                {
                    Array.from({length: 1}).map((_, index) => <div
                        key={index}
                        className="group flex items-center px-4 space-x-1 w-full h-8 border border-transparent hover:border-border">
                        <TextIcon className="flex-shrink-0 w-4 h-4 fill-muted-foreground/50 group-hover:fill-muted-foreground"/>
                        <div className="flex items-center w-full h-full overflow-hidden" onDoubleClick={() => {
                            console.log(event)
                        }}>
                            <span className="block text-xs cursor-default truncate select-none">{index}</span>
                        </div>
                        <div className="hidden flex-shrink-0 space-x-2 group-hover:flex">
                            <Button variant="ghost" className="p-0 h-full">
                                <UnlockIcon className="w-3 h-3"/>
                            </Button>
                            <EyeIcon className="w-3 h-3"/>
                        </div>
                    </div>)
                }
            </div>
            <div className="absolute top-0 right-0 w-1 h-full select-none cursor-ew-resize bg-transparent"
                 onMouseDown={handleMouseDown}></div>
        </div>
    )
}