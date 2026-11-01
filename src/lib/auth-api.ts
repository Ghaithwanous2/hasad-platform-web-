import { appConfig } from "@/lib/config";

export type LoginResponse = {
    access: string;
    refresh: string;
};

export async function loginRequest(
    identifier: string,
    password: string,
): Promise<LoginResponse> {
    const response = await fetch(
        `${appConfig.apiBaseUrl}/auth/login/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier,
                password,
            }),
        },
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        const message =
            data?.detail ||
            data?.non_field_errors?.[0] ||
            "تعذر تسجيل الدخول. تحقق من البيانات وحاول مرة أخرى.";

        throw new Error(message);
    }

    return data as LoginResponse;
}
