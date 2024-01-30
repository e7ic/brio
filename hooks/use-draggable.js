"use client"

import { useState, useCallback } from 'react';

export const useDraggable = (initialWidth, minWidth = 160, maxWidth) => {
    const [width, setWidth] = useState(initialWidth);

    const doDrag = useCallback((newWidth) => {
        setWidth(Math.min(Math.max(newWidth, minWidth), maxWidth ?? Infinity));
    }, [minWidth]);

    const startDrag = useCallback((startX, startWidth) => {
        const moveHandler = (e) => {
            requestAnimationFrame(() => doDrag(startWidth + e.clientX - startX));
        };

        const stopDrag = () => {
            document.removeEventListener('mousemove', moveHandler);
            document.removeEventListener('mouseup', stopDrag);
            document.body.style.cursor = '';
        };

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', stopDrag);
        document.body.style.cursor = 'ew-resize';
    }, [doDrag]);

    return [width, startDrag];
};
