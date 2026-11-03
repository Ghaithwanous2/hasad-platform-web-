import {
    ClipboardList,
    FileText,
    Gavel,
    LayoutDashboard,
    Package,
    Scale,
    Settings,
    ShieldCheck,
    Truck,
    UserRound,
    Warehouse,
} from "lucide-react";
import Link from "next/link";


const navigationItems = [
    {
        label: "لوحة التحكم",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "المستخدمون والتحقق",
        href: "/users",
        icon: UserRound,
    },
    {
        label: "العروض والمزادات",
        href: "/offers",
        icon: Gavel,
    },
    {
        label: "الطلبات والدفعات",
        href: "/orders",
        icon: ClipboardList,
    },
    {
        label: "الجودة والنزاعات",
        href: "/quality-disputes",
        icon: ShieldCheck,
    },
    {
        label: "العمليات",
        href: "/operations",
        icon: Truck,
    },
    {
        label: "المستودعات",
        href: "/warehouses",
        icon: Warehouse,
    },
    {
        label: "التسويات",
        href: "/settlements",
        icon: Scale,
    },
    {
        label: "التقارير",
        href: "/reports",
        icon: FileText,
    },
    {
        label: "الإعدادات",
        href: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="hidden min-h-screen w-72 shrink-0 border-l border-border bg-surface lg:block">
            <div className="border-b border-border px-6 py-5">
                <p className="text-lg font-bold text-brand-green">
                    حصاد
                </p>

                <p className="mt-1 text-xs text-muted-text">
                    الإدارة المركزية
                </p>
            </div>

            <nav
                aria-label="القائمة الرئيسية"
                className="space-y-1 px-4 py-5"
            >
                {navigationItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-text transition hover:bg-pale-green hover:text-brand-green"
                        >
                            <Icon size={19} strokeWidth={1.8} />
                            <span>{item.label}</span>
                        </Link>

                    );
                })}
            </nav>
        </aside>
    );
}
