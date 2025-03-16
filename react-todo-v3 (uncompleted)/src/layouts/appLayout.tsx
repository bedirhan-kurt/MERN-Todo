import {AppSidebar} from "@/components/app-sidebar.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                {children}
            </main>
        </SidebarProvider>
    )
}