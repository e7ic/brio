import {Header} from "@/components/header";
import {InternalUI} from "@/components/internal-ui";
import {MotionPanel} from "@/components/motion-panel";
import {PropertiesPanel} from "@/components/properties-panel";
import {StackToolbar} from "@/components/stack-toolbar";

export default function App() {
    return (
        <main className="flex flex-col h-screen">
            <Header/>
            <InternalUI/>
            <StackToolbar/>
            <div className="fixed left-0 top-14 right-0 bottom-0 flex justify-between pointer-events-none">
                <MotionPanel/>
                <PropertiesPanel/>
            </div>
        </main>
    )
}