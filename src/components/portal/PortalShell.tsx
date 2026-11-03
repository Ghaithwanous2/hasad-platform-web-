import type { ReactNode } from "react";
import Sidebar from "@/components/portal/Sidebar";
import Topbar from "@/components/portal/Topbar";

type PortalShellProps = {
    children: ReactNode;
};

export default function PortalShell({
    children,
}: PortalShellProps) {
    return (
        <div className="min-h-screen bg-background lg:flex">
            <Sidebar />

            <div className="min-w-0 flex-1">
                <Topbar />

                {children}
            </div>
        </div>
    );
}
