const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiBaseUrl) {
    throw new Error(
        "متغير NEXT_PUBLIC_API_URL غير موجود في ملف .env.local.",
    );
}

export const appConfig = {
    apiBaseUrl,
} as const;
