"use client";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginRequest } from "@/lib/auth-api";
import { saveAuthTokens } from "@/lib/auth-storage";





export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);




    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError("");
        setSuccess("");

        const normalizedEmail = email.trim();

        if (!normalizedEmail) {
            setError("يرجى إدخال البريد الإلكتروني.");
            return;
        }

        if (!normalizedEmail.includes("@")) {
            setError("يرجى إدخال بريد إلكتروني صحيح.");
            return;
        }

        if (!password) {
            setError("يرجى إدخال كلمة المرور.");
            return;
        }

        setIsLoading(true);

        try {
            const tokens = await loginRequest(normalizedEmail, password);

            saveAuthTokens(tokens);

            setSuccess("تم تسجيل الدخول بنجاح.");

        } catch (requestError) {
            const message =
                requestError instanceof Error
                    ? requestError.message
                    : "تعذر تسجيل الدخول. حاول مرة أخرى.";

            setError(message);
        } finally {
            setIsLoading(false);
        }
    }



    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
            <section className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-sm">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-2xl font-bold text-white">
                        ح
                    </div>

                    <h1 className="text-2xl font-bold text-foreground">
                        تسجيل الدخول إلى منصة حصاد
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-muted-text">
                        بوابة الإدارة والتشغيل المركزية
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="identifier"
                            className="mb-2 block text-sm font-medium text-foreground"
                        >
                            البريد الإلكتروني
                        </label>

                        <input
                            id="identifier"
                            name="identifier"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}

                            placeholder="أدخل بريدك الإلكتروني"
                            className="block w-full min-w-0 rounded-xl border border-border bg-white px-4 py-3 text-right text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-soft-green"

                        />

                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-foreground"
                        >
                            كلمة المرور
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="أدخل كلمة المرور"
                                className="block w-full min-w-0 rounded-xl border border-border bg-white px-4 py-3 pl-24 text-right text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-soft-green"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((current) => !current)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted-text transition hover:bg-pale-green hover:text-brand-green"
                                aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                                title={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                            >
                                {showPassword ? (
                                    <EyeOff size={20} strokeWidth={1.8} />
                                ) : (
                                    <Eye size={20} strokeWidth={1.8} />
                                )}
                            </button>

                        </div>
                    </div>

                    {error && (
                        <p
                            role="alert"
                            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-error"
                        >
                            {error}
                        </p>
                    )}

                    {success && (
                        <p
                            role="status"
                            className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-brand-green"
                        >
                            {success}
                        </p>
                    )}


                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full rounded-xl bg-action-green px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-green disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
                    </button>

                </form>

                <p className="mt-6 text-center text-xs leading-5 text-muted-text">
                    هذه البوابة مخصصة للمستخدمين الإداريين والموظفين المصرح لهم.
                </p>
            </section>
        </main>
    );
}
