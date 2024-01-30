"use client"

import {
    AlignBottomIcon,
    AlignHorizontalCenterIcon,
    AlignLeftIcon,
    AlignRightIcon,
    AlignTopIcon,
    AlignVerticalCenterIcon,
    CornersIcon, CornerTopLeftIcon,
    DistributeSpacingHorizontalIcon,
    DistributeSpacingVerticalIcon,
    RotateIcon, UnLinkIcon
} from "@/components/icons";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

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
                            <Input className="p-0 border-none shadow-none h-6 focus-visible:ring-0 text-xs select-none"
                                   defaultValue="120"/>
                        </label>
                        <label className="flex items-center space-x-2 select-none">
                            <span className="block w-4 text-center text-xs text-muted-foreground">Y</span>
                            <Input className="p-0 border-none shadow-none h-6 focus-visible:ring-0 text-xs"
                                   defaultValue="120"/>
                        </label>
                        <Button variant="ghost" className="w-8" disabled></Button>
                    </div>
                    <div className="flex space-x-2">
                        <label className="flex items-center space-x-2 select-none">
                            <span className="block w-4 text-center text-xs text-muted-foreground">W</span>
                            <Input className="p-0 border-none shadow-none h-6 focus-visible:ring-0 text-xs"
                                   defaultValue="200"/>
                        </label>
                        <label className="flex items-center space-x-2 select-none">
                            <span className="block w-4 text-center text-xs text-muted-foreground">H</span>
                            <Input className="p-0 border-none shadow-none h-6 focus-visible:ring-0 text-xs"
                                   defaultValue="200"/>
                        </label>
                        <Button variant="ghost" className="p-2 w-8 h-8">
                            <UnLinkIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button>
                    </div>
                    <div className="flex space-x-2">
                        <label className="flex items-center space-x-2 select-none">
                            <RotateIcon className="w-5 h-5 fill-muted-foreground"/>
                            <Input className="p-0 border-none shadow-none h-6 focus-visible:ring-0 text-xs"
                                   defaultValue="0°"/>
                        </label>
                        <label className="flex items-center space-x-2 select-none">
                            <CornerTopLeftIcon className="w-5 h-5 fill-muted-foreground"/>
                            <Input className="p-0 border-none shadow-none h-6 focus-visible:ring-0 text-xs"
                                   defaultValue="0"/>
                        </label>
                        <Button variant="ghost" className="p-2 w-8 h-8">
                            <CornersIcon className="w-4 h-4 fill-muted-foreground"/>
                        </Button>
                    </div>
                </div>
            </div>
            <Separator className="my-2.5"/>
            <div>

            </div>
        </div>
    )
}