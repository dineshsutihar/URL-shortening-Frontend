import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile, logoutUser } from "./server-calls";

interface UserProfile {
    id: number;
    email: string;
    name: string;
}

interface AuthContextType {
    user: UserProfile | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    setToken: (token: string) => void;
    logout: () => void;
    refreshUser: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [token, setTokenState] = useState<string | null>(
        localStorage.getItem("token")
    );
    const [loading, setLoading] = useState(true);

    const refreshUser = async () => {
        const t = localStorage.getItem("token");
        if (t) {
            const profile = await getUserProfile();
            setUser(profile);
        } else {
            setUser(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        refreshUser();
    }, []);

    const setToken = (newToken: string) => {
        localStorage.setItem("token", newToken);
        setTokenState(newToken);
        refreshUser();
    };

    const logout = () => {
        logoutUser();
        setTokenState(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!token,
                loading,
                setToken,
                logout,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
