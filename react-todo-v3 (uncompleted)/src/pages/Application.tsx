import AppLayout from '../layouts/appLayout.tsx';
import FunctionsBar from "@/components/functions-bar.tsx";

export default function Application() {
    return (
        <AppLayout>
            <div className="w-screen h-screen">
                <FunctionsBar></FunctionsBar>
            </div>
        </AppLayout>
    )
}