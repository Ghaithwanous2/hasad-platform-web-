import {
    Activity,
    AlertTriangle,
    ClipboardList,
    Users,
} from "lucide-react";
import EmptyState from "@/components/portal/EmptyState";
import SectionCard from "@/components/portal/SectionCard";
import PageHeader from "@/components/portal/PageHeader";
import StatCard from "@/components/portal/StatCard";




export default function DashboardPage() {
    return (
        <main className="mx-auto w-full max-w-7xl px-6 py-8">
            <PageHeader
                eyebrow="الإدارة المركزية"
                title="لوحة التحكم"
                description="متابعة العمليات الزراعية والطلبات والدفعات والجودة من مكان واحد."
            />
            <section
                aria-label="ملخص العمليات"
                className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
                <StatCard
                    title="إجراءات تحتاج متابعة"
                    value="—"
                    description="ستظهر عند توفر بيانات العمليات."
                    icon={Activity}
                    iconClassName="bg-soft-green text-brand-green"
                />

                <StatCard
                    title="المستخدمون والتحقق"
                    value="—"
                    description="ستظهر بعد ربط API المستخدمين."
                    icon={Users}
                    iconClassName="bg-blue-50 text-information-blue"
                />

                <StatCard
                    title="الطلبات والدفعات"
                    value="—"
                    description="ستظهر بعد تنفيذ وحدات الطلبات والدفعات."
                    icon={ClipboardList}
                    iconClassName="bg-amber-50 text-warning"
                />

                <StatCard
                    title="الجودة والنزاعات"
                    value="—"
                    description="ستظهر بعد تنفيذ API الجودة والنزاعات."
                    icon={AlertTriangle}
                    iconClassName="bg-red-50 text-error"
                />
            </section>



            <SectionCard
                title="آخر النشاطات"
                description="ستظهر النشاطات بعد ربط سجل التدقيق مع Backend API."
            >
                <EmptyState
                    title="لا توجد نشاطات حالياً"
                    description="ستظهر النشاطات عند توفر سجلات فعلية."
                />
            </SectionCard>

        </main>
    );
}
