"use client"

import { useRef } from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {
    EyeIcon,
    ImageIcon,
    TextIcon,
    TrianglesIcon,
    RectangleLineIcon,
    UnlockIcon,
    CircleIcon,
    VectorLineIcon
} from "@/components/icons";
import { useDraggable } from "@/hooks/use-draggable";

export function MotionPanel({ nodes }) {
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
                    nodes.map((node, index) => <div
                        key={index}
                        className="group flex items-center px-4 space-x-2 w-full h-8 border border-transparent hover:border-border">
                        <Button variant="ghost" className="p-0 h-fit hover:bg-transparent" onDoubleClick={() => {
                            console.log("position")
                        }}>
                            <LayerIcon type={node.type} />
                        </Button>
                        <div className="flex items-center w-full h-full overflow-hidden" onDoubleClick={() => {
                            console.log("")
                        }}>
                            <span className="block text-xs cursor-default truncate select-none">{node.name}</span>
                        </div>
                        <div className="hidden flex-shrink-0 space-x-2 group-hover:flex">
                            <Button variant="ghost" className="p-0 h-full">
                                <UnlockIcon className="w-3 h-3"/>
                            </Button>
                            <Button variant="ghost" className="p-0 h-full">
                                <EyeIcon className="w-3 h-3"/>
                            </Button>
                        </div>
                    </div>)
                }
            </div>
            <div className="absolute top-0 right-0 w-1 h-full select-none cursor-ew-resize bg-transparent"
                 onMouseDown={handleMouseDown}></div>
        </div>
    )
}

const LayerIcon = ({type}) => {
    switch (type) {
        case "TEXT":
            return <TextIcon className="flex-shrink-0 w-4 h-4 fill-muted-foreground/50 group-hover:fill-muted-foreground" />
        case "RRECT":
            return <RectangleLineIcon className="flex-shrink-0 w-4 h-4 fill-muted-foreground/50 group-hover:fill-muted-foreground" />
        case "POLYGON":
            return <TrianglesIcon className="flex-shrink-0 w-4 h-4 fill-muted-foreground/50 group-hover:fill-muted-foreground" />
        case "ELLIPSE":
            return <CircleIcon className="flex-shrink-0 w-4 h-4 fill-muted-foreground/50 group-hover:fill-muted-foreground" />
        case "VECTOR":
            return <VectorLineIcon className="flex-shrink-0 w-4 h-4 fill-muted-foreground/50 group-hover:fill-muted-foreground" />
        case "IMAGE":
            return <ImageIcon className="flex-shrink-0 w-4 h-4 fill-muted-foreground/50 group-hover:fill-muted-foreground" />
    }
}