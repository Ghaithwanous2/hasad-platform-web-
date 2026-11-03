import type { ReactNode } from "react";
import PortalShell from "@/components/portal/PortalShell";
import CurrentUserProvider from "@/components/portal/CurrentUserProvider";

type PortalLayoutProps = {
    children: ReactNode;
};

export default function PortalLayout({
    children,
}: PortalLayoutProps) {
    return (
        <CurrentUserProvider>
            <PortalShell>{children}</PortalShell>
        </CurrentUserProvider>
    );
}
