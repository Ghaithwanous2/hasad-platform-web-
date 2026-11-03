import type { ReactNode } from "react";

type SectionCardProps = {
    title: string;
    description?: string;
    action?: ReactNode;
    children: ReactNode;
};

export default function SectionCard({
    title,
    description,
    action,
    children,
}: SectionCardProps) {
    return (
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h2 className="text-lg font-bold text-foreground">
                        {title}
                    </h2>

                    {description ? (
                        <p className="mt-2 text-sm leading-6 text-muted-text">
                            {description}
                        </p>
                    ) : null}
                </div>

                {action ? (
                    <div className="shrink-0">
                        {action}
                    </div>
                ) : null}
            </div>

            <div className="mt-6">
                {children}
            </div>
        </section>
    );
}
