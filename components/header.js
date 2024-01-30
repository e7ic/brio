"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {ArrowUndoUpIcon, PlayIcon, PrinterIcon} from "@/components/icons";
import {Button} from "@/components/ui/button";

export function Header() {
    return (
        <div
            className="fixed top-0 left-0 right-0 px-4 h-14 grid grid-cols-3 bg-white border-b-gray-300 border z-50">
            <div className="flex items-center justify-start">
                <Tooltip>
                    <TooltipTrigger>
                        <ArrowUndoUpIcon className="w-6 h-6"/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Back</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="flex items-center justify-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <span className="text-xs font-semibold cursor-pointer text-center">Untitled</span>
                    </PopoverTrigger>
                    <PopoverContent className="px-4 py-2.5 w-72 rounded-xl">
                        <div className="flex items-center justify-between space-x-12 h-8">
                            <Label className="text-muted-foreground text-xs font-semibold">Name</Label>
                            <Input className="h-full text-xs font-semibold" defaultValue="Untitled"/>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex items-center justify-end space-x-4">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-2 bg-muted">
                            <PlayIcon className="w-5 h-5 fill-primary"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Preview</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="p-2 bg-muted">
                            <PrinterIcon className="w-5 h-5 fill-primary"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Print</p>
                    </TooltipContent>
                </Tooltip>
                <Button>
                    Publish
                </Button>
            </div>
        </div>

    )
}