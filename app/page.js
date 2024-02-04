"use client"

import {useEffect} from "react";
import {Header} from "@/components/header";
import {InternalUI} from "@/components/internal-ui";
import {MotionPanel} from "@/components/motion-panel";
import {PropertiesPanel} from "@/components/properties-panel";
import {useDesignStore} from "@/store";
import {generateMixed8DigitID} from "@/lib/utils";

export default function App() {

    const {basic, init} = useDesignStore()

    useEffect(() => {
        init().catch(err => console.error("Err", err))
    }, [])

    return (
        <main className="flex flex-col h-screen">
            <Header/>
            <InternalUI/>
            <div className="fixed left-0 top-14 right-0 bottom-0 flex justify-between pointer-events-none">
                <MotionPanel nodes={basic?.nodes}/>
                <PropertiesPanel/>
            </div>
        </main>
    )
}