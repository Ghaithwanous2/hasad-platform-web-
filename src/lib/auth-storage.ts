import type { LoginResponse } from "@/lib/auth-api";

const ACCESS_TOKEN_KEY = "hasad_access_token";
const REFRESH_TOKEN_KEY = "hasad_refresh_token";

export function saveAuthTokens(tokens: LoginResponse) {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function clearAuthTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}
