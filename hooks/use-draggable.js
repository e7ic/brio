"use client"

import { useState, useCallback, useEffect } from 'react';

export const useDraggable = (initialWidth, minWidth = 160) => {
    const [width, setWidth] = useState(initialWidth);

    const doDrag = useCallback((newWidth) => {
        setWidth(Math.max(newWidth, minWidth));
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
