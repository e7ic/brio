"use client"

import {
    AlignBottomIcon,
    AlignHorizontalCenterIcon,
    AlignLeftIcon,
    AlignRightIcon,
    AlignTopIcon,
    AlignVerticalCenterIcon,
    CornersIcon,
    DistributeSpacingHorizontalIcon,
    DistributeSpacingVerticalIcon,
    RotateIcon
} from "@/components/icons";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";

export function PropertiesPanel() {
    return (
        <div className="fixed right-0 top-14 bottom-0 pt-4 max-w-80 w-1/2 bg-white z-10">
            <div className="absolute top-0 left-0 w-1 h-full cursor-w-resize bg-transparent"></div>
            <div className="flex items-center justify-between px-4 select-none">
                <Button variant="ghost" className="p-0 h-full cursor-pointer">
                    <AlignLeftIcon className="w-4 h-4 fill-muted-foreground"/>
                </Button>
                <Button variant="ghost" className="p-0 h-full cursor-pointer">
                    <AlignHorizontalCenterIcon className="w-4 h-4 fill-muted-foreground"/>
                </Button>
                <Button variant="ghost" className="p-0 h-full cursor-pointer">
                    <AlignRightIcon className="w-4 h-4 fill-muted-foreground"/>
                </Button>
                <Button variant="ghost" className="p-0 h-full cursor-pointer">
                    <AlignTopIcon className="w-4 h-4 fill-muted-foreground"/>
                </Button>
                <Button variant="ghost" className="p-0 h-full cursor-pointer">
                    <AlignVerticalCenterIcon className="w-4 h-4 fill-muted-foreground"/>
                </Button>
                <Button variant="ghost" className="p-0 h-full cursor-pointer">
                    <AlignBottomIcon className="w-4 h-4 fill-muted-foreground"/>
                </Button>
                <Button variant="ghost" className="p-0 h-full cursor-not-allowed">
                    <DistributeSpacingHorizontalIcon className="w-4 h-4 fill-muted"/>
                </Button>
                <Button variant="ghost" className="p-0 h-full cursor-not-allowed">
                    <DistributeSpacingVerticalIcon className="w-4 h-4 fill-muted"/>
                </Button>
            </div>
            <Separator className="my-2.5"/>
            <div className="px-4">
                <div className="flex">
                    <label className="flex items-center space-x-2 select-none">
                        <span className="block w-4 text-center text-xs text-muted-foreground">X</span>
                        <Input className="p-0 border-none h-6 focus-visible:ring-0"/>
                    </label>
                    <label className="flex items-center space-x-2 select-none">
                        <span className="block w-4 text-center text-xs text-muted-foreground">Y</span>
                        <Input className="p-0 border-none h-6 focus-visible:ring-0"/>
                    </label>
                </div>
                <div className="flex">
                    <label className="flex items-center space-x-2 select-none">
                        <span className="block w-4 text-center text-xs text-muted-foreground">W</span>
                        <Input className="p-0 border-none h-6 focus-visible:ring-0"/>
                    </label>
                    <label className="flex items-center space-x-2 select-none">
                        <span className="block w-4 text-center text-xs text-muted-foreground">H</span>
                        <Input className="p-0 border-none h-6 focus-visible:ring-0"/>
                    </label>
                </div>
                <div className="flex">
                    <label className="flex items-center space-x-2 select-none">
                        <RotateIcon className="w-4 h-4 fill-muted-foreground" />
                        <Input className="p-0 border-none h-6 focus-visible:ring-0"/>
                    </label>
                    <label className="flex items-center space-x-2 select-none">
                        <CornersIcon className="w-4 h-4 fill-muted-foreground" />
                        <Input className="p-0 border-none h-6 focus-visible:ring-0"/>
                    </label>
                </div>
            </div>
        </div>
    )
}