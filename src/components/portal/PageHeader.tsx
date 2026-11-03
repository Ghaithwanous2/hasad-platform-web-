import type { ReactNode } from "react";

type PageHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    actions?: ReactNode;
};

export default function PageHeader({
    eyebrow,
    title,
    description,
    actions,
}: PageHeaderProps) {
    return (
        <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
                {eyebrow ? (
                    <p className="mb-2 text-sm font-medium text-brand-green">
                        {eyebrow}
                    </p>
                ) : null}

                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    {title}
                </h1>

                {description ? (
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-text">
                        {description}
                    </p>
                ) : null}
            </div>

            {actions ? (
                <div className="flex shrink-0 flex-wrap items-center gap-3">
                    {actions}
                </div>
            ) : null}
        </header>
    );
}
