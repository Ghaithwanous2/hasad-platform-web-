"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import {
    getCurrentUserRequest,
    type CurrentUser,
} from "@/lib/current-user-api";

type CurrentUserContextValue = {
    user: CurrentUser | null;
    isLoading: boolean;
    error: string | null;
    refreshUser: () => Promise<void>;
};

const CurrentUserContext =
    createContext<CurrentUserContextValue | null>(null);

type CurrentUserProviderProps = {
    children: ReactNode;
};

export default function CurrentUserProvider({
    children,
}: CurrentUserProviderProps) {
    const [user, setUser] = useState<CurrentUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function refreshUser() {
        setIsLoading(true);
        setError(null);

        try {
            const currentUser = await getCurrentUserRequest();
            setUser(currentUser);
        } catch (requestError) {
            const message =
                requestError instanceof Error
                    ? requestError.message
                    : "تعذر جلب بيانات المستخدم.";

            setError(message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        void refreshUser();
    }, []);

    return (
        <CurrentUserContext.Provider
            value={{
                user,
                isLoading,
                error,
                refreshUser,
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    );
}

export function useCurrentUser() {
    const context = useContext(CurrentUserContext);

    if (!context) {
        throw new Error(
            "useCurrentUser يجب أن يستخدم داخل CurrentUserProvider.",
        );
    }

    return context;
}
