export interface Credentials {
    email: string;
    password: string;
}

export interface AuthState {
    user: { email: string; name: string } | null;
    token: string | null;
    isAuthenticated: boolean;
}

export interface AuthResponse {
    token: string;
    user: { email: string; name: string };
}
