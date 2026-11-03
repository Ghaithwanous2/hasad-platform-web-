type EmptyStateProps = {
    title?: string;
    description?: string;
};

export default function EmptyState({
    title = "لا توجد بيانات حالياً",
    description = "ستظهر البيانات هنا عند توفرها.",
}: EmptyStateProps) {
    return (
        <div className="rounded-xl border border-dashed border-border bg-background px-5 py-10 text-center">
            <p className="text-sm font-semibold text-foreground">
                {title}
            </p>

            <p className="mt-2 text-sm leading-6 text-muted-text">
                {description}
            </p>
        </div>
    );
}
