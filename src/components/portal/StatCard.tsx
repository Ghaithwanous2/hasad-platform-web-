import type { LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: string;
    description?: string;
    icon: LucideIcon;
    iconClassName?: string;
};

export default function StatCard({
    title,
    value,
    description,
    icon: Icon,
    iconClassName = "bg-soft-green text-brand-green",
}: StatCardProps) {
    return (
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-muted-text">
                        {title}
                    </p>

                    <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                        {value}
                    </p>
                </div>

                <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
                >
                    <Icon size={21} strokeWidth={1.8} />
                </div>
            </div>

            {description ? (
                <p className="mt-4 text-xs leading-5 text-muted-text">
                    {description}
                </p>
            ) : null}
        </article>
    );
}
