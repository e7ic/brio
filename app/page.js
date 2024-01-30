import {Header} from "@/components/header";
import {InternalUI} from "@/components/internal-ui";
import {MotionPanel} from "@/components/motion-panel";
import {PropertiesPanel} from "@/components/properties-panel";
import {StackToolbar} from "@/components/stack-toolbar";

export default function App() {
    return (
        <main className="flex flex-col h-screen">
            <Header/>
            <MotionPanel/>
            <InternalUI/>
            <StackToolbar/>
            <PropertiesPanel/>
        </main>
    )
}