"use client"

import {useState} from "react";
import {
    AlignBottomIcon,
    AlignHorizontalCenterIcon,
    AlignLeftIcon,
    AlignRightIcon,
    AlignTopIcon,
    AlignVerticalCenterIcon, CornerBottomLeftIcon, CornerBottomRightIcon,
    CornersIcon, CornerTopLeftIcon, CornerTopRightIcon,
    DistributeSpacingHorizontalIcon,
    DistributeSpacingVerticalIcon,
    RotateIcon, UnLinkIcon
} from "@/components/icons";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

export function PropertiesPanel() {
    return (
        <div className="relative h-full pt-4 w-72 bg-white z-10 pointer-events-auto">
            <div className="flex items-center justify-between px-4 select-none">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-pointer">
                            <AlignLeftIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Align left</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-pointer">
                            <AlignHorizontalCenterIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button></TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Align horizontal center</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-pointer">
                            <AlignRightIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Align right</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-pointer">
                            <AlignTopIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Align top</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-pointer">
                            <AlignVerticalCenterIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Align vertical center</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-pointer">
                            <AlignBottomIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Align bottom</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-not-allowed">
                            <DistributeSpacingHorizontalIcon className="w-4 h-4 fill-muted"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Distribute horizontal spacing</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-0 h-full cursor-not-allowed">
                            <DistributeSpacingVerticalIcon className="w-4 h-4 fill-muted"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12}>
                        <p>Distribute vertical spacing</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <Separator className="my-2.5"/>
            <div className="px-4">
                <strong className="text-sm">Basic</strong>
                <div className="space-y-0.5">
                    <div className="flex space-x-2">
                        <label className="flex items-center space-x-2 select-none">
                            <span className="block w-4 text-center text-xs text-muted-foreground">X</span>
                            <InteractiveInput value={0} onChange={e => {
                                console.log(e)
                            }}/>
                        </label>
                        <label className="flex items-center space-x-2 select-none">
                            <span className="block w-4 text-center text-xs text-muted-foreground">Y</span>
                            <InteractiveInput value={0}/>
                        </label>
                        <Button variant="ghost" className="w-8" disabled></Button>
                    </div>
                    <div className="flex space-x-2">
                        <label className="flex items-center space-x-2 select-none">
                            <span className="block w-4 text-center text-xs text-muted-foreground">W</span>
                            <InteractiveInput value={0}/>
                        </label>
                        <label className="flex items-center space-x-2 select-none">
                            <span className="block w-4 text-center text-xs text-muted-foreground">H</span>
                            <InteractiveInput value={0}/>
                        </label>
                        <Tooltip>
                            <TooltipTrigger className="p-2 w-8 h-8">
                                <UnLinkIcon className="w-4 h-4 fill-muted-foreground"/>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>Constrain proportions</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div className="flex space-x-2">
                        <label className="flex items-center space-x-2 select-none">
                            <RotateIcon className="w-4 h-4 fill-muted-foreground"/>
                            <InteractiveInput value={0}/>
                        </label>
                        <label className="flex items-center space-x-2 select-none">
                            <CornerTopLeftIcon className="w-4 h-4 fill-muted-foreground"/>
                            <InteractiveInput value={0}/>
                        </label>
                        <Popover>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <PopoverTrigger className="p-2 w-8 h-8">
                                        <CornersIcon className="w-4 h-4 fill-muted-foreground"/>
                                    </PopoverTrigger>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p>Independent corner</p>
                                </TooltipContent>
                            </Tooltip>
                            <PopoverContent side="left" className="p-2 shadow-xl border-none">
                                <span className="text-sm font-semibold">Corner radius</span>
                                <Separator className="mt-2 mb-4"/>
                                <ul className="grid grid-cols-2 gap-2.5">
                                    <li className="flex items-center space-x-2">
                                        <CornerTopLeftIcon className="w-4 h-4 fill-muted-foreground"/>
                                        <InteractiveInput value={0}/>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CornerTopRightIcon className="w-4 h-4 fill-muted-foreground"/>
                                        <InteractiveInput value={0}/>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CornerBottomLeftIcon className="w-4 h-4 fill-muted-foreground"/>
                                        <InteractiveInput value={0}/>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CornerBottomRightIcon className="w-4 h-4 fill-muted-foreground"/>
                                        <InteractiveInput value={0}/>
                                    </li>
                                </ul>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
            <Separator className="my-2.5"/>
            <div>

            </div>
        </div>
    )
}

const InteractiveInput = ({value, onChange}) => {
    const [inputValue, setInputValue] = useState(value)
    const handleFocus = (e) => {
        e.target.select()
    }

    const handleBlur = (e) => {
        if (/^\d+$/g.test(e.target.value)) {
            setInputValue(e.target.value)
        } else {
            setInputValue(value)
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = e => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setInputValue(val => val + 1);
            onChange?.(inputValue + 1);
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setInputValue(val => val - 1);
            onChange?.(inputValue - 1);
        }
    }

    return <Input
        className="p-0 border-none shadow-none h-6 focus-visible:ring-0 text-xs"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
    />
}