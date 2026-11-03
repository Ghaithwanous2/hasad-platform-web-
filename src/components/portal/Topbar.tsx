"use client";

import { Bell, Search, UserRound } from "lucide-react";
import { useCurrentUser } from "@/components/portal/CurrentUserProvider";

const roleLabels: Record<string, string> = {
    ADMIN: "مدير النظام",
    OPERATIONS_STAFF: "موظف العمليات",
    QUALITY_MANAGER: "مسؤول الجودة",
    DELIVERY_MANAGER: "مدير التوصيل",
    WAREHOUSE_MANAGER: "مدير المستودع",
    WAREHOUSE_STAFF: "موظف المستودع",
    AUDITOR: "مدقق إداري",
};

export default function Topbar() {
    const { user, isLoading, error } = useCurrentUser();

    const displayName =
        user?.full_name || user?.email || "المستخدم الحالي";

    const displayRole = user?.role
        ? roleLabels[user.role] || user.role
        : isLoading
            ? "جارٍ تحميل الدور..."
            : "الدور غير متوفر";

    return (
        <header className="border-b border-border bg-surface">
            <div className="flex min-h-20 items-center justify-between gap-4 px-6 py-4">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="hidden min-w-0 max-w-xl flex-1 md:block">
                        <label htmlFor="global-search" className="sr-only">
                            البحث في النظام
                        </label>

                        <div className="relative">
                            <Search
                                size={18}
                                strokeWidth={1.8}
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-text"
                            />

                            <input
                                id="global-search"
                                type="search"
                                placeholder="ابحث في النظام..."
                                className="w-full rounded-xl border border-border bg-background py-3 pl-4 pr-11 text-sm text-foreground outline-none transition placeholder:text-muted-text focus:border-brand-green focus:ring-2 focus:ring-soft-green"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                    <button
                        type="button"
                        aria-label="الإشعارات"
                        title="الإشعارات"
                        className="relative rounded-xl p-3 text-muted-text transition hover:bg-pale-green hover:text-brand-green"
                    >
                        <Bell size={20} strokeWidth={1.8} />

                        <span
                            aria-hidden="true"
                            className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error"
                        />
                    </button>

                    <div className="hidden h-8 w-px bg-border sm:block" />

                    <div className="flex items-center gap-3 rounded-xl px-2 py-2 text-right">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-green text-brand-green">
                            <UserRound size={20} strokeWidth={1.8} />
                        </span>

                        <div className="hidden min-w-0 sm:block">
                            <p className="max-w-48 truncate text-sm font-semibold text-foreground">
                                {displayName}
                            </p>

                            <p className="mt-1 text-xs text-muted-text">
                                {error ? "تعذر تحميل بيانات الحساب" : displayRole}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
