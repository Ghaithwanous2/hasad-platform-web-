import { appConfig } from "@/lib/config";
import { getAccessToken } from "@/lib/auth-storage";

export type CurrentUser = {
    account_id: string;
    email: string | null;
    phone: string | null;
    first_name: string;
    last_name: string;
    full_name: string;
    role: string;
};

export async function getCurrentUserRequest(): Promise<CurrentUser> {
    const accessToken = getAccessToken();

    if (!accessToken) {
        throw new Error("لا يوجد رمز دخول صالح.");
    }

    const response = await fetch(
        `${appConfig.apiBaseUrl}/auth/me/`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        },
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        const message =
            data?.detail ||
            "تعذر جلب بيانات المستخدم الحالي.";

        throw new Error(message);
    }

    return data as CurrentUser;
}
