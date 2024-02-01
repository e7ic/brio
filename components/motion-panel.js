"use client"

import {useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {
    EyeIcon,
    ImageIcon,
    TextIcon,
    TrianglesIcon,
    RectangleLineIcon,
    UnlockIcon,
    CircleIcon,
    VectorLineIcon, EyeClosedIcon, LockIcon
} from "@/components/icons";
import {useDraggable} from "@/hooks/use-draggable";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import { useDesignStore } from "@/store";

export function MotionPanel({nodes}) {
    const [width, startDrag] = useDraggable(288, 224, 448);
    const resizableRef = useRef(null);
    const { basic, update } = useDesignStore()

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
                    nodes?.map((node, index) => <div
                        key={index}
                        className={cn("group flex items-center px-4 space-x-2 w-full h-8 border border-transparent", {
                            "hover:border-border": node.visible
                        })}>
                        <Button variant="ghost" className="p-0 h-fit" onDoubleClick={() => {
                            console.log("position")
                        }}>
                            <LayerIcon type={node.type}
                                       className={cn("flex-shrink-0 w-4 h-4 fill-muted-foreground/50", {
                                           "group-hover:fill-muted-foreground": node.visible
                                       })}/>
                        </Button>
                        <EditableElement value={node.name} onChange={async e => {
                            const payload = basic?.nodes?.map((item, i) => {
                                if(i === index) {
                                    item.name = e
                                }
                                return item
                            })
                            await update({
                                nodes: payload
                            })
                        }}>
                                <span
                                    className={cn("block text-xs cursor-default truncate select-none", {"text-muted-foreground/50": !node.visible})}>{node.name}</span>
                        </EditableElement>
                        <div className="hidden flex-shrink-0 space-x-2 group-hover:flex layer-action">
                            <Button variant="ghost" className="p-0 h-full" onClick={async () => {
                                const payload = basic?.nodes?.map((item, i) => {
                                    if(i === index) {
                                        item.locked = !item.locked
                                    }
                                    return item
                                })
                                await update({
                                    nodes: payload
                                })
                            }}>
                                {node.locked ? <LockIcon
                                        className={cn("w-3 h-3", {"fill-muted-foreground/50": !node.visible})}/> :
                                    <UnlockIcon
                                        className={cn("w-3 h-3", {"fill-muted-foreground/50": !node.visible})}/>}
                            </Button>
                            <Button variant="ghost" className="p-0 h-full" onClick={async () => {
                                const payload = basic?.nodes?.map((item, i) => {
                                    if(i === index) {
                                        item.visible = !item.visible
                                    }
                                    return item
                                })
                                await update({
                                    nodes: payload
                                })
                            }}>
                                {node.visible ? <EyeIcon
                                        className={cn("w-3 h-3", {"fill-muted-foreground/50": !node.visible})}/> :
                                    <EyeClosedIcon
                                        className={cn("w-3 h-3", {"fill-muted-foreground/50": !node.visible})}/>}
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

const LayerIcon = ({type, ...props}) => {
    switch (type) {
        case "TEXT":
            return <TextIcon {...props} />
        case "RRECT":
            return <RectangleLineIcon {...props} />
        case "POLYGON":
            return <TrianglesIcon {...props} />
        case "ELLIPSE":
            return <CircleIcon {...props} />
        case "VECTOR":
            return <VectorLineIcon {...props} />
        case "IMAGE":
            return <ImageIcon {...props} />
    }
}

const EditableElement = ({value, children, onChange}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [inputStr, setInputStr] = useState(value)

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setInputStr(e.target.value);
    };

    const handleFocus = (e) => {
        e.target.select()
    }

    const handleBlur = () => {
        setIsEditing(false);
        onChange(inputStr)
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
            onChange(inputStr)
        }
    };

    return isEditing ? (
        <Input
            className="w-full h-full p-0 text-xs focus-visible:border-none focus-visible:ring-0 focus-visible:shadow-none focus-visible:bg-background layer-input"
            value={inputStr} onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            onFocus={handleFocus}
            autoFocus
        />) : (
        <div className="flex items-center w-full h-full overflow-hidden" onDoubleClick={handleDoubleClick}>
            {children}
        </div>
    )
}
