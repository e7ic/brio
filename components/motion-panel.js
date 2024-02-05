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
    VectorLineIcon, EyeClosedIcon, LockIcon, FolderIcon, ArrowRightFillIcon
} from "@/components/icons";
import {motion} from "framer-motion";
import {useDraggable} from "@/hooks/use-draggable";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {useDesignStore} from "@/store";

export function MotionPanel({nodes}) {
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
                    nodes?.map(node => <LayerCell key={node.id} node={node} />)
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
        case "GROUP":
            return <FolderIcon {...props} />
    }
}

const LayerCell = ({ node }) => {
    const {basic, currentId, setCurrentId, update} = useDesignStore()
    return <motion.div
        onClick={e => {
            e.preventDefault()
            setCurrentId(node.id)
        }}
        className={cn("group flex items-center px-4 space-x-2 w-full h-8 border border-transparent bg-background", {
            "hover:border-border": currentId !== node.id && node.visible,
            "bg-muted": currentId === node.id
        })}
        drag="y"
        dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
        dragMomentum={false}
        dragElastic={1}
    >
        <Button variant="ghost" className="flex-shrink-0 p-0 w-4 h-fit hover:bg-transparent">
            {node.type === "GROUP" && <ArrowRightFillIcon className="w-full h-4 fill-muted-foreground/50"/>}
        </Button>
        <Button variant="ghost" className="p-0 h-fit" onDoubleClick={() => {
            console.log("position")
        }}>
            <LayerIcon type={node.type}
                       className={cn("flex-shrink-0 w-4 h-4 fill-muted-foreground/50", {
                           "group-hover:fill-muted-foreground": node.visible,
                           "fill-muted-foreground": currentId === node.id
                       })}/>
        </Button>
        <EditableElement value={node.name} onChange={async e => {
            const payload = basic?.nodes?.map(item => {
                if (item.id === currentId) {
                    item.name = e
                }
                return item
            })
            await update({
                nodes: payload
            })
        }}>
                                <span
                                    className={cn("block tex text-xs cursor-default truncate select-none", {"text-muted-foreground/50": !node.visible})}>{node.name}</span>
        </EditableElement>
        <div className="hidden flex-shrink-0 space-x-2 group-hover:flex layer-action">
            <Button variant="ghost" className="p-0 h-full" onClick={async () => {
                const payload = basic?.nodes?.map(item => {
                    if (item.id === currentId) {
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
                const payload = basic?.nodes?.map(item => {
                    if (item.id === currentId) {
                        item.visible = !item.visible
                    }
                    return item
                })
                await update({nodes: payload})
            }}>
                {
                    node.visible ?
                        <EyeIcon
                            className={cn("w-3 h-3", {"fill-muted-foreground/50": !node.visible})}/> :
                        <EyeClosedIcon
                            className={cn("w-3 h-3", {"fill-muted-foreground/50": !node.visible})}/>
                }
            </Button>
        </div>
    </motion.div>
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
