import {Header} from "@/components/header";
import {InternalUI} from "@/components/internal-ui";
import {MotionPanel} from "@/components/motion-panel";
import {PropertiesPanel} from "@/components/properties-panel";
import {StackToolbar} from "@/components/stack-toolbar";

const nodes = [
    {
        name: "Text 012345",
        type: "TEXT"
    },
    {
        name: "Image",
        type: "IMAGE"
    },
    {
        name: "Rectangle",
        type: "RRECT"
    },
    {
        name: "Ellipse",
        type: "ELLIPSE"
    },
    {
        name: "Vector",
        type: "VECTOR"
    },
    {
        name: "Polygon",
        type: "POLYGON"
    }
]

export default function App() {
    return (
        <main className="flex flex-col h-screen">
            <Header/>
            <InternalUI/>
            <div className="fixed left-0 top-14 right-0 bottom-0 flex justify-between pointer-events-none">
                <MotionPanel nodes={nodes}/>
                <PropertiesPanel/>
            </div>
        </main>
    )
}