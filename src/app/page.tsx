export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="w-full max-w-2xl rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-2xl font-bold text-white">
          ح
        </div>

        <h1 className="mb-3 text-3xl font-bold text-foreground">
          منصة حصاد
        </h1>

        <p className="mb-6 text-lg text-muted-text">
          منصة الإدارة المركزية لسلسلة التوريد الزراعية
        </p>

        <div className="rounded-xl border border-dashed border-border bg-background p-5">
          <p className="text-sm leading-7 text-muted-text">
            سيتم تجهيز بوابة العمليات المركزية هنا.


            هذه الواجهة مخصصة للمستخدمين الإداريين والموظفين المصرح لهم.
          </p>
        </div>
      </section>
    </main>
  );
}
