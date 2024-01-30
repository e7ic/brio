"use client"

import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Provider({ children }) {
    useEffect(() => {
        // 禁用 F12
        const handleKeyDown = (event) => {
            if (event.keyCode === 123) {
                event.preventDefault();
            }
        }

        // 禁用右击菜单
        const handleContextMenu = (event) => {
            // event.preventDefault();
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener('contextmenu', handleContextMenu);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('contextmenu', handleContextMenu);
        }
    }, []);

    return <TooltipProvider>{children}</TooltipProvider>
}